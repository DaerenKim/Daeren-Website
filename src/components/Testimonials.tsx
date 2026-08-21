import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "What stood out most was Daeren's initiative and problem-solving ability. He regularly took ownership of tasks and proposed practical solutions with minimal supervision. He consistently exceeded expectations.",
      name: "Kartik Mahadevan",
      title: "Associate Director, AI & ML",
      company: "AIA Singapore",
    },
    {
      quote:
        "Daeren demonstrated strong technical capability and the ability to deliver meaningful contributions in a fast-paced environment. He showed strong problem-solving abilities, often proposing practical and effective solutions.",
      name: "Alexandra Widjaja",
      title: "Assistant Manager, Regional Operations",
      company: "Shopee Singapore",
    },
    {
      quote:
        "He is one of the excellent students I have encountered in many years of teaching. Daeren distinguished himself by frequently going above and beyond his formal responsibilities.",
      name: "Pham Thi Kim Cuc",
      title: "Senior Lecturer, Statistics & Data Science",
      company: "National University of Singapore",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What They Said
          </h2>
          <div className="w-12 h-0.5 bg-primary"></div>
        </div>

        <div className="space-y-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 border border-border rounded-lg animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Quote className="w-6 h-6 text-primary mb-4" />
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{item.quote}"
              </p>
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.title} · {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
