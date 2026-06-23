// 21st.dev source — cached for HANDOFF MODE
// Query: "experience timeline resume"
// Component: "Work Experience" (collapsible company → positions, skill pills)
// Date cached: 2026-06-23
// Borrowed for: Alexandria Rosales résumé/work-history section (both directions)
// What we kept (translated to vanilla HTML + Tailwind CDN + <details>/IntersectionObserver):
//   - Company header with logo dot + "current employer" animated ping
//   - Collapsible positions under each company, left vertical rule (before:left-3)
//   - Employment type · period meta row
//   - Markdown bullet description + skill pills (rounded, muted, mono)
// Deps in original: @radix-ui/react-collapsible, lucide-react, react-markdown, next/image

import {
  BriefcaseBusinessIcon, ChevronsDownUpIcon, ChevronsUpDownIcon,
  CodeXmlIcon, DraftingCompassIcon, GraduationCapIcon,
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const iconMap = {
  code: CodeXmlIcon, design: DraftingCompassIcon,
  business: BriefcaseBusinessIcon, education: GraduationCapIcon,
} as const;

export type ExperiencePositionItemType = {
  id: string; title: string; employmentPeriod: string;
  employmentType?: string; description?: string;
  icon?: keyof typeof iconMap; skills?: string[]; isExpanded?: boolean;
};
export type ExperienceItemType = {
  id: string; companyName: string; companyLogo?: string;
  positions: ExperiencePositionItemType[]; isCurrentEmployer?: boolean;
};

export function WorkExperience({ className, experiences }:
  { className?: string; experiences: ExperienceItemType[] }) {
  return (
    <div className={cn("bg-background px-4", className)}>
      {experiences.map((e) => <ExperienceItem key={e.id} experience={e} />)}
    </div>
  );
}

function ExperienceItem({ experience }: { experience: ExperienceItemType }) {
  return (
    <div className="space-y-4 py-4">
      <div className="flex items-center gap-3">
        <div className="flex size-6 shrink-0 items-center justify-center">
          {experience.companyLogo
            ? <img src={experience.companyLogo} alt={experience.companyName} className="size-6 rounded-full" />
            : <span className="flex size-2 rounded-full bg-zinc-300" />}
        </div>
        <h3 className="text-lg font-medium">{experience.companyName}</h3>
        {experience.isCurrentEmployer && (
          <span className="relative flex items-center justify-center">
            <span className="absolute inline-flex size-3 animate-ping rounded-full bg-info opacity-50" />
            <span className="relative inline-flex size-2 rounded-full bg-info" />
          </span>
        )}
      </div>
      <div className="relative space-y-4 before:absolute before:left-3 before:h-full before:w-px before:bg-border">
        {experience.positions.map((p) => <ExperiencePositionItem key={p.id} position={p} />)}
      </div>
    </div>
  );
}

function ExperiencePositionItem({ position }: { position: ExperiencePositionItemType }) {
  const Icon = iconMap[position.icon || "business"];
  return (
    <Collapsible defaultOpen={position.isExpanded} asChild>
      <div className="relative">
        <CollapsibleTrigger className="group block w-full text-left">
          <div className="relative z-10 mb-1 flex items-center gap-3 bg-background">
            <div className="flex size-6 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              <Icon className="size-4" />
            </div>
            <h4 className="flex-1 text-base font-medium">{position.title}</h4>
            <ChevronsDownUpIcon className="hidden size-4 group-data-[state=open]:block" />
            <ChevronsUpDownIcon className="hidden size-4 group-data-[state=closed]:block" />
          </div>
          <div className="flex items-center gap-2 pl-9 text-sm text-muted-foreground">
            {position.employmentType && (<><span>{position.employmentType}</span>
              <Separator orientation="vertical" className="h-4" /></>)}
            <span>{position.employmentPeriod}</span>
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {position.description && <div className="prose prose-sm pt-2 pl-9">{position.description}</div>}
          {position.skills?.length ? (
            <ul className="flex flex-wrap gap-1.5 pt-2 pl-9">
              {position.skills.map((s, i) => (
                <li key={i} className="inline-flex items-center rounded-lg border bg-muted/50 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">{s}</li>
              ))}
            </ul>
          ) : null}
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
}
