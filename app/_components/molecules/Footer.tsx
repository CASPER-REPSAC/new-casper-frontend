import {
  CopyrightIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
} from '@app/_components/icons';
import { FOOTER } from '@app/_constants/label';
import { ICON_SIZE } from '@app/_constants/size';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@app/_shadcn/components/ui/tooltip';

function Footer() {
  return (
    <div className="h-16 w-full border-t">
      <div className="common-center flex h-full items-center justify-between">
        <Tooltip>
          <TooltipTrigger>
            <div className="flex w-28 justify-between">
              <GithubIcon size={ICON_SIZE.medium} />
              <FacebookIcon size={ICON_SIZE.medium} />
              <InstagramIcon size={ICON_SIZE.medium} />
            </div>
          </TooltipTrigger>
          <TooltipContent>장식용 인데요</TooltipContent>
        </Tooltip>

        <div className="flex flex-col text-right text-xs">
          <span>{FOOTER.location}</span>
          <span className="flex items-end justify-end">
            <CopyrightIcon />
            {FOOTER.copyRight}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
