import { Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { activationStats, stats } from "../../constants";

export const TopSection = () => {
  return (
    <div className="w-full bg-[#D0F1FD] h-[350px] rounded-xl relative flex items-start justify-start p-8">
      <h1 className="text-[#013158] font-bold text-2xl w-xs">
        We automatically generate reports for each of your customers
      </h1>
      <div className=" absolute w-1/2 h-3/4 bg-[#F7F8F9] right-0 bottom-0 rounded-tl-[22px] p-4">
        <div className="relative w-full h-full">
          <div className="h-full w-1/2 text-black rounded-md bg-white border border-neutral-200 overflow-hidden flex flex-col">
            <div className="h-[16px] bg-linear-to-r from-[#F6F0FA] via-[#F7DDF6] to-[#FDE4E1] rounded-t-md" />
            <div className="flex-1 p-4 flex flex-col justify-between">
              <div className="flex items-start gap-3">
                <div className="relative shrink-0">
                  <div className="size-14 rounded-xl bg-[#073468] text-white flex items-center justify-center font-bold text-xl">
                    I
                  </div>
                  <div className="absolute -right-0.5 -bottom-0.5 size-3.5 rounded-full bg-green-500 ring-2 ring-white" />
                </div>
                <div>
                  <h3 className="text-black font-semibold text-lg leading-tight">
                    Intercom
                  </h3>
                  <p className="text-neutral-400 text-sm mt-1">
                    Joined 9 Feb 2023
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {stats.map((item) => (
                  <div
                    key={item.key}
                    className="flex items-center justify-between text-sm"
                  >
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Zap className="size-4 text-green-500 fill-green-500/15" />
                      <span>{item.key}</span>
                    </div>
                    <span className="text-neutral-900 font-medium">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute -right-8 top-0 -rotate-3 w-[300px] h-[280px] bg-[#FDFCFD] shadow-sm rounded-md border border-neutral-200 p-6 flex flex-col">
            <div>
              <h4 className="text-black text-[15px] font-medium">
                Company activation
              </h4>
              <p className="text-black text-5xl font-semibold mt-2">40%</p>
            </div>

            <div className="mt-4 space-y-2">
              {activationStats.map((item) => (
                <div
                  key={item.key}
                  className="grid grid-cols-[1fr_140px] items-center gap-4"
                >
                  <span className="text-neutral-700 text-sm">{item.key}</span>
                  <div className="flex items-center gap-2">
                    <Progress
                      value={item.value}
                      className="h-2 bg-neutral-100 [&>[data-slot=progress-indicator]]:bg-[#797BF3]"
                    />
                    <span className="text-[#797BF3] text-xs font-semibold w-8 text-right">
                      {item.value}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
