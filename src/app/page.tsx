import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 h-dvh items-center justify-center bg-yellow font-figtree">
      <div className="flex h-fit flex-col p-6 gap-6 rounded-[20px] w-[327px] sm:w-[384px] bg-white">
        <div className="relative w-full h-[200px] rounded-[10px]">
          <Image
            src={"/images/illustration-article.svg"}
            alt="article-image"
            fill
            className="rounded-[10px]"
          />
        </div>
        <div className="flex flex-col gap-3">
          <div className="bg-yellow px-3 py-1 w-fit rounded-[4px] text-black text-sm leading-normal font-bold">
            Learning
          </div>
          <p className="text-black text-sm leading-normal font-normal">
            Published 21 Dec 2023
          </p>
          <h2 className="hover:text-yellow text-black text-2xl leading-normal font-extrabold">
            HTML & CSS foundations
          </h2>
          <p className="text-grey text-base leading-normal font-medium">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </div>
        <div className="flex flex-row gap-3 items-center justify-center w-fit">
          <div className="relative w-8 aspect-square">
            <Image
              src={"/images/image-avatar.webp"}
              alt="creator-photo-profile"
              fill
            />
          </div>
          <p className="text-black text-sm leading-normal font-extrabold">
            Greg Hooper
          </p>
        </div>
      </div>
    </main>
  );
}
