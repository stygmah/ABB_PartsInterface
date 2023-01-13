import React from 'react';
import { Feature } from '../../interfaces/feature';
import FeatureComponent from '../Feature';
import {
  Container,
  Features,
  Header,
} from './styles';

interface PartProps {
  features: Feature[]
  partName:string;
}

const Part: React.FC<PartProps> = ({ features, partName }) => {
  return (
    <Container>
      <Header>{partName}</Header>
    <Features>
      {
        features.map(({data, featureName, quality})=> 
          <FeatureComponent
            key={crypto.getRandomValues(new Uint32Array(1))[0]}
            data={data}
            featureName={featureName}
            quality={quality}
          />
        )
      }
    </Features>
    </Container>
  );
};

export default Part;
