import { Skeleton } from "./ui/skeleton";

function SkeletonCard() {
  return (
    <div className="  flex gap-4 flex-wrap mt-8 ">
      {Array.from({ length: 10 }, (_, idx) => (
        <div className="flex flex-col  space-y-3" key={idx}>
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonCard;
