import React, { Component } from "react";
import { Carousel, Card, Button } from "flowbite-react";

function CarouselTemplate() {
  return (
    <div
      className="h-screen flex justify-evenly items-center"
      style={{ backgroundColor: "#f5f5f5" }}
    >
      <div className="h-90 sm:h-85 xl:h-80 2xl:h-96 w-full max-w-lg mb-20">
        <Carousel>
          <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Button color="default">I ❤️ this post!</Button>
              </h6>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Description
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-2.jpg">
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Button color="default">I ❤️ this post!</Button>
              </h6>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Description
              </p>
            </Card>
          </div>
          <div className="max-w-sm">
            <Card imgSrc="https://flowbite.com/docs/images/blog/image-3.jpg">
              <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <Button color="default">I ❤️ this post!</Button>
              </h6>
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Title
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Description
              </p>
            </Card>
          </div>
        </Carousel>
        <div className="h-90 sm:h-85 xl:h-80 2xl:h-96 w-full max-w-lg mb-20 mt-20">
          <Carousel>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Button color="default">I ❤️ this post!</Button>
                </h6>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Description
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-2.jpg">
                <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Button color="default">I ❤️ this post!</Button>
                </h6>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Description
                </p>
              </Card>
            </div>
            <div className="max-w-sm">
              <Card imgSrc="https://flowbite.com/docs/images/blog/image-3.jpg">
                <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Button color="default">I ❤️ this post!</Button>
                </h6>
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Title
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  Description
                </p>
              </Card>
            </div>
          </Carousel>
          <div className="h-90 sm:h-85 xl:h-80 2xl:h-96 w-full max-w-lg mb-20 mt-20">
            <Carousel>
              <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-1.jpg">
                  <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Button color="default">I ❤️ this post!</Button>
                  </h6>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Title
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Description
                  </p>
                </Card>
              </div>
              <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-2.jpg">
                  <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Button color="default">I ❤️ this post!</Button>
                  </h6>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Title
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Description
                  </p>
                </Card>
              </div>
              <div className="max-w-sm">
                <Card imgSrc="https://flowbite.com/docs/images/blog/image-3.jpg">
                  <h6 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <Button color="default">I ❤️ this post!</Button>
                  </h6>
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Title
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Description
                  </p>
                </Card>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselTemplate;
