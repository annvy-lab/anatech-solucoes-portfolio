import React from "react";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
interface ServiceProps {
  id: number;
  title: string;
  description: string;
  features: string[];
  rating: number;
  reviews: number;
  image: string;
}

const ServiceItem = ({ id, title, description, features, image }: ServiceProps) => {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 pt-0 h-full flex flex-col">
      <div className="relative overflow-hidden rounded-t-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={200}
          height={150}
          className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="flex flex-col flex-1 p-6 py-0">
        <CardHeader className="px-0 pt-0 pb-2">
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge key={index} className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default ServiceItem;
