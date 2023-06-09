type ComponentProps = {
    toggleComponent: () => void;
  };
  const ReadMore: React.FC<ComponentProps> = ({ toggleComponent }) => {
    return(
        <div className='heropage_BioContainer_33H8i '>
        Each young acolyte to the Dezun order must complete a series of rites before becoming a shadow priest. The
        final rite, the rite of shades, is a harrowing spiritual journey through the Nothl Realm, an unpredictable
        domain from which not all visitants return. Of those who do, some return mad. Others return with strange
        aptitudes. But all who go there are changed by their experiences.
        <br />
        <br />
        Driven by the need for enlightenment, Dazzle was the youngest of his tribe ever to request the sacred
        ritual. At first the order refused him, saying he was too young. But Dazzle was not to be dissuaded. Sensing
        something special in the headstrong young acolyte, the elders relented. Dazzle drank down the sacred potion
        and sat by the fire while the rest of his tribe danced through the night.
        <br />
        <br />
        In this ethereal dimension of the Nothl Realm, the properties of light and dark are inverted. Thus his
        brilliant healing light, beautiful to our eye, is actually a sinister kind of evil; and the darkest deeds
        are done in a dazzling glow. The elders' intuition was prophetic: Dazzle returned to his people as a Shadow
        Priest like none seen before, with the power to heal as well as to destroy. Now he uses his gift to cut down
        his enemies and mend his friends.<div className='heropage_ShowBio_3x47o'  onClick={toggleComponent} >Close History</div>
      </div>
    )
}
export default ReadMore