import Card from './Card';

export default function Cards({characters , onClose}) {
   return (
      <>
         {
            characters.map(pj => {
                  return (
                        <Card
                        key={pj.id}
                        id={pj.id}
                        name={pj.name}
                        status={pj.status}
                        species={pj.species}
                        gender={pj.gender}
                        origin={pj.origin.name}
                        image={pj.image}
                        onClose={onClose}
                        />
                  )
            })
         }
      </>
      );
}
