import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const linksMap= links.map(
  (link, index) =>{
  let url =`#${link}`
  return <a key={index} href={url}>{link}</a>

})
  return <nav>
    {linksMap}
  </nav>;
}

export default NavBar;
