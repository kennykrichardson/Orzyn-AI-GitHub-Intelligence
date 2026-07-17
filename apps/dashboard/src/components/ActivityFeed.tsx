interface ActivityItem {
  title: string;
  time: string;
}

interface Props {
  activities: ActivityItem[];
}

export default function ActivityFeed({
  activities,
}: Props) {
  return (
    <div
      className="
      glass

      rounded-3xl

      p-6

      shadow-xl
      "
    >
      <h2 className="text-3xl font-bold mb-6">
        Activity Feed
      </h2>

      <div className="space-y-4">
        {activities.map(
          (
            activity,
            index
          ) => (
            <div
              key={index}
              className="
              border-b

              border-black/10

              pb-3
              "
            >
              <p className="font-medium">
                {activity.title}
              </p>

              <p
                className="
                text-sm

                text-gray-500
                "
              >
                {activity.time}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}