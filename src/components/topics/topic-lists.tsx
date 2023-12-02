import Link from "next/link";
import { Chip } from "@nextui-org/react";
import prisma from "@/db";
import path from "@/paths";

export default async function TopicLists() {
  const allTopips = await prisma.topic.findMany();

  const renderedTopic = allTopips.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={path.topicShowPath(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row gap-2 flex-wrap">{renderedTopic}</div>;
}
