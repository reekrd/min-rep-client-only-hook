'use client';
import { useSessionStorage } from "@uidotdev/usehooks";

const ClientComponent = () => {

  const [bitData, setBitData] = useSessionStorage("minRepo:bit", "");

  
  return (
    <section>
      <h4>Client component</h4>
    </section>
  );

}

export default ClientComponent;