import { Trans } from "@lingui/react/macro";

import { APP_DESCRIPTION, APP_NAME } from "@/utils/brand";

import { SectionBase } from "../shared/section-base";

export function InformationSectionBuilder() {
  return (
    <SectionBase type="information" className="space-y-3">
      <div className="space-y-2 rounded-md border bg-muted/50 p-4 text-sm">
        <h4 className="font-medium tracking-tight">{APP_NAME}</h4>
        <p className="leading-relaxed text-muted-foreground">
          <Trans>{APP_DESCRIPTION}</Trans>
        </p>
        <p className="text-xs text-muted-foreground">
          <Trans comment="App version in builder information panel">Version {__APP_VERSION__}</Trans>
        </p>
      </div>
    </SectionBase>
  );
}
