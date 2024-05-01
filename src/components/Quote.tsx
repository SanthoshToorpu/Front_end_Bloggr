import React from 'react';

interface QuoteProps {
  type: "signup" | "signin";
}

const Quote = ({ type }: QuoteProps) => {
  let title, description, mission, features, benefits;

  if (type === "signup") {
    title = "Join Us Today";
    description = "Start sharing your stories and ideas with the world. Discover and engage with a community of like-minded individuals.";
    mission = "Our Mission: To empower people to share their ideas and connect with a global audience.";
    features = [
      "Publish your stories and ideas",
      "Follow topics and writers you love",
      "Engage with a community of readers",
      "Earn money from your writing"
    ];
    benefits = [
      "Grow your audience and influence",
      "Develop your writing skills",
      "Connect with like-minded individuals",
      "Earn passive income from your content"
    ];
  } else {
    title = "Welcome Back!";
    description = "Sign in to continue your journey. Explore new stories, connect with writers, and engage with your favorite topics.";
    mission = "Our Mission: To provide a platform for people to explore and engage with diverse stories and ideas.";
    features = [
      "Discover new stories and writers",
      "Engage with your favorite topics",
      "Connect with like-minded readers and writers",
      "Stay updated with personalized recommendations"
    ];
    benefits = [
      "Stay informed and entertained",
      "Connect with a community of readers and writers",
      "Find inspiration for your own writing",
      "Explore new perspectives and ideas"
    ];
  }

  return (
    <div className="flex-1 bg-gray-100 p-8 lg:p-12 xl:p-16 dark:bg-gray-800">
      <div className="mx-auto max-w-[600px] space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Our Mission</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {mission}
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Key Features</h3>
            <ul className="list-disc space-y-1 pl-4 text-gray-500 dark:text-gray-400">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Benefits</h3>
            <ul className="list-disc space-y-1 pl-4 text-gray-500 dark:text-gray-400">
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
