import React from 'react';
import Heading from '../atoms/Heading';

const FeaturedItem = () => {
  return (
    <div>
      <section class="bg-white">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="mx-auto max-w-xl text-center">
            <Heading class="text-4xl font-bold tracking-tight sm:text-5xl">
              Read trusted reviews from our customers
            </Heading>
          </div>
          <div class="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 ">
            <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />
              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center ">
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing at Studio
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>

            <div>
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />
              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing at Studio
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>
            <div>
              <img
                alt="Woman"
                src="https://images.unsplash.com/photo-1599566219227-2efe0c9b7f5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="mx-auto h-24 w-24 rounded-full object-cover shadow-xl"
              />
              <blockquote class="-mt-6 flex flex-col justify-between rounded-lg p-12 text-center shadow-xl">
                <p class="mt-1 text-xs font-medium text-gray-500">
                  Digital Marketing at Studio
                </p>
                <p class="mt-4 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptatem alias ut provident sapiente repellendus.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedItem;
