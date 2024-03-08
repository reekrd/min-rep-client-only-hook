'use client';

import { useEffect } from "react";
import { useSessionStorage } from "@uidotdev/usehooks";

const ClientComponent = ({bit}) => {

  const [bitData, setBitData] = useSessionStorage("usehooks:bit", "");
  
  useEffect(() => {
    setBitData( bit );
  }, [bit, setBitData]);

  return (
    <section>
      <h4>Client component @uidotdev/usehooks</h4>
    </section>
  );

}

export default ClientComponent;