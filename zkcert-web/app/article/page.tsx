import CommentSection from "@/components/commentSection";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import { Button } from "@nextui-org/button";

export default function ArticlePage() {
  return (
    <>
      <div className="relative isolate overflow-hidden px-6 lg:py-10 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden"></div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-purple-600">
                  Article
                </p>
                <h1 className="mt-2 mb-5 text-3xl font-bold tracking-tight  sm:text-4xl">
                  Article Title
                </h1>
                <Chip className="mr-1" color="secondary">
                  Keyword
                </Chip>
                <Chip className="mr-1" color="secondary">
                  Keyword
                </Chip>
                <Chip className="mr-1" color="secondary">
                  Keyword
                </Chip>
              </div>
            </div>
          </div>
          <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <Card className="max-w-[400px]">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">Article Title</p>
                  <p className="text-small text-default-500">Journal</p>
                </div>
              </CardHeader>

              <CardBody>
                <div className="px-4">
                  <p className="font-semibold">Author</p>
                  <p>Publisher</p>
                  <p>Year Posted</p>
                  <p>Month Posted</p>
                  <p>DOI</p>
                  <a href="#" className="text-primary-500">
                    URL
                  </a>
                </div>
              </CardBody>
              <hr />
              <CardFooter>
                {" "}
                <div>
                  <div className="mb-2">
                    <p className="font-semibold">Share Article</p>
                  </div>
                  <div className="flex">
                    <Button className="mr-1" color="secondary" variant="ghost">
                      Copy Link 🔗
                    </Button>{" "}
                    <Button color="default">
                      Share on{" "}
                      <Image
                        className="w-6 h-6"
                        src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?w=826&t=st=1707400857~exp=1707401457~hmac=28e59290717c1b9853bb465c71cf083cac73e10b773499c85a845ff7a2f6bd7c"
                      />
                    </Button>{" "}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>
          <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
              <div className="max-w-xl text-base leading-7  lg:max-w-lg">
                <p>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Faucibus commodo
                  massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Id dolor praesent
                  donec est. Odio penatibus risus viverra tellus varius sit
                  neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                  Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id.
                  <br></br>
                  <br></br>
                  Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                  risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                  Id dolor praesent donec est. Odio penatibus risus viverra
                  tellus varius sit neque erat velit. Faucibus commodo massa
                  rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Faucibus commodo
                  massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis
                  mauris semper sed amet vitae sed turpis id. Id dolor praesent
                  donec est. Odio penatibus risus viverra tellus varius sit
                  neque erat velit. Faucibus commodo massa rhoncus, volutpat.
                  Dignissim sed eget risus enim. Mattis mauris semper sed amet
                  vitae sed turpis id.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentSection />
    </>
  );
}
