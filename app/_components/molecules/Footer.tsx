import {
  CopyrightIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
} from 'app/_components/icons';
import { ICON_SIZE } from 'app/_constants/size';
import { FOOTER } from 'app/_constants/label';

function Footer() {
  return (
    <div className="mt-24 h-12 w-full bg-sky-100/75 dark:bg-gray-900">
      <div className="common-center flex h-full items-center justify-between">
        <div className="flex w-28 justify-between">
          <GithubIcon size={ICON_SIZE.medium} />
          <FacebookIcon size={ICON_SIZE.medium} />
          <InstagramIcon size={ICON_SIZE.medium} />
        </div>
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
