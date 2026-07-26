import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe2, ArrowRight } from "lucide-react";

import { CORAL, LIME, contact } from "../lib/site-data";
import { Eyebrow } from "../components/site-sections";

export const Route = createFileRoute("/contacts")({
  component: Contacts,
});

function Contacts() {
  const details = [
    {
      icon: MapPin,
      label: "Office",
      value: contact.address,
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phoneDisplay,
      href: contact.phoneHref,
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Globe2,
      label: "Website",
      value: contact.website,
      href: contact.websiteHref,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Eyebrow>Contacts</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Let's build your next campaign.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Talk to the E-Redeem team about consumer engagement, rewards and loyalty programmes.
              We'll help you pick the right mechanic and get you live.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md hover:brightness-110"
                style={{ background: CORAL }}
              >
                Email the team
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={contact.phoneHref}
                className="inline-flex items-center gap-2 rounded-md border-2 bg-white px-6 py-3 text-sm font-semibold transition-colors hover:bg-slate-50"
                style={{ borderColor: CORAL, color: CORAL }}
              >
                Call us
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
            <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              Get in touch
            </div>
            <ul className="mt-6 space-y-5">
              {details.map((d) => (
                <li key={d.label} className="flex items-start gap-4">
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-xl"
                    style={{ background: LIME }}
                  >
                    <d.icon className="h-5 w-5 text-slate-900" />
                  </span>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                      {d.label}
                    </div>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="mt-1 block text-sm font-medium text-slate-800 hover:text-slate-900"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-sm font-medium leading-relaxed text-slate-800">
                        {d.value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
