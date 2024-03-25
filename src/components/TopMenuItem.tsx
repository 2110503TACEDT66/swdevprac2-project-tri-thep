import Link from "next/link";

export default function TopMenuItem({title, pageref} : {title:string, pageref:string}) {
    return(
      <Link href={pageref}>
        {title}
      </Link>
    );
}