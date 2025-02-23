import React, { useEffect, useRef } from 'react';
import { Clock, Sun, Coffee, Utensils, Moon, Star } from 'lucide-react';

const schedule = [
  {
    time: "7:00 AM",
    icon: Sun,
    title: "Morning Check-in",
    description: "Health screening and breakfast time"
  },
  {
    time: "9:00 AM",
    icon: Star,
    title: "Morning Activities",
    description: "Supervised play and exercise"
  },
  {
    time: "12:00 PM",
    icon: Utensils,
    title: "Lunch & Rest",
    description: "Meal time and peaceful napping"
  },
  {
    time: "2:00 PM",
    icon: Coffee,
    title: "Enrichment Time",
    description: "Training and mental stimulation"
  },
  {
    time: "4:00 PM",
    icon: Star,
    title: "Afternoon Play",
    description: "More fun and activities"
  },
  {
    time: "6:00 PM",
    icon: Moon,
    title: "Evening Pickup",
    description: "Daily report and goodbye"
  }
];

export default function Schedule() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentIndex = itemRefs.current.findIndex(ref => ref === entry.target);
            if (timelineRef.current) {
              const progress = ((currentIndex + 1) / schedule.length) * 100;
              timelineRef.current.style.height = `${progress}%`;
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">A Day at Our Daycare</h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Your pet's day is filled with fun, exercise, and lots of love
          </p>
        </div>

        <div className="relative">
          {/* Timeline line with animation */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full md:block hidden">
            <div className="w-1 bg-amber-100 h-full">
              <div
                ref={timelineRef}
                className="w-full bg-amber-400 transition-all duration-1000 ease-out"
                style={{ height: '0%' }}
              />
            </div>
          </div>
          
          <div className="space-y-8">
            {schedule.map((item, index) => (
              <div
                key={index}
                ref={el => itemRefs.current[index] = el}
                className="relative"
              >
                {/* Mobile Layout */}
                <div className="md:hidden block">
                  <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="h-8 w-8 bg-amber-600 rounded-full flex items-center justify-center transform scale-0 animate-pop-in">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-lg font-semibold text-amber-900">{item.time}</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <item.icon className="w-8 h-8 text-amber-600 flex-shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-amber-900 mb-1">{item.title}</h3>
                        <p className="text-amber-700">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout */}
                <div className={`md:flex hidden items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : ''} gap-4`}>
                        {index % 2 === 1 && <item.icon className="w-8 h-8 text-amber-600 flex-shrink-0" />}
                        <div>
                          <h3 className="text-xl font-semibold text-amber-900 mb-1">{item.title}</h3>
                          <p className="text-amber-700">{item.description}</p>
                        </div>
                        {index % 2 === 0 && <item.icon className="w-8 h-8 text-amber-600 flex-shrink-0" />}
                      </div>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center w-8">
                    <div className="h-8 w-8 bg-amber-600 rounded-full flex items-center justify-center transform scale-0 animate-pop-in">
                      <Clock className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className={`${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                      <span className="text-lg font-semibold text-amber-900">{item.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}