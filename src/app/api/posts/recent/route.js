import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {

  const fetchedData=await prisma.category.findMany({});
  const randomNum=Math.random()*10;
  const data=[];
  try {
    fetchedData.slice(randomNum,randomNum+5)?.map((item)=>data.push(item.title))   
  } catch (error) {
    fetchedData.slice(randomNum,randomNum-5)?.map((item)=>data.push(item.title)) 
  }
  // console.log(data);
  
  try {

    const posts = await Promise.all(data.map(async (catSlug) => {
      const post = await prisma.post.findFirst({
        where: { catSlug },
        orderBy: { createdAt: 'desc' },
        select: { title: true, catSlug: true , createdAt:true, slug:true,img:true},
      });
      return post;
    }));
    const filteredData=posts.filter(item => item!=null)
    return new NextResponse(JSON.stringify({posts:filteredData}, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};










// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();

  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
