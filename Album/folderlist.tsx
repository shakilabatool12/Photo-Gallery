import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FolderType } from "./page";
import Link from "next/link";

const FolderList = ({folder}: {folder:FolderType}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{folder.name}</CardTitle>
        <CardDescription>
          Kindly select the "View Now" button to access and observe the image
          contained within the specified album.
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-end">
        <Link href={`/Album/${folder.name}`}>
        <Button>View Album</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
export default FolderList;
