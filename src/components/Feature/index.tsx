import React from 'react';
import { Feature } from '../../interfaces/feature';
import {
  Container,
  Header,
  Table,
  QualitySymbol,
  Bottom,
} from './styles';

const QUALITY_COLORS = {
  green: '#089c54',
  yellow:'#f0c404',
  red: '#ff0838', 
}

const QUALITY_SYMBOL = {
  green: '\u2714',
  yellow:'\u0021',
  red: '\u292B',
}

const getColorByQuality = (quality: 0 | 1 | 2 ): '#ff0838' | '#089c54' | '#f0c404' =>{
  const colorArr = Object.values(QUALITY_COLORS)
  return colorArr[quality] as '#ff0838' | '#089c54' | '#f0c404';
}

const getSymbolByQuality = (quality: 0 | 1 | 2 ): '\u2714' | '\u0021' | '\u292B' =>{
  const colorArr = Object.values(QUALITY_SYMBOL)
  return colorArr[quality] as '\u2714' | '\u0021' | '\u292B';
}

const FeatureComponent: React.FC<Feature> = ({ data, featureName, quality }) => {
  return (
    <Container>
      <Header color={getColorByQuality(quality)}>{featureName} <QualitySymbol color="white">{getSymbolByQuality(quality)}</QualitySymbol></Header>
      <Table>
        <thead>
          <tr>
            <th>Control</th>
            <th>Dev</th>
            <th>Dev Out Tol</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ control, dev, devOutTol, quality }) => (
            <tr key={crypto.getRandomValues(new Uint32Array(1))[0]}>
              <td>{control}</td>
              <td>{dev}</td>
              <td>{devOutTol}</td>
              <td><QualitySymbol color={getColorByQuality(quality)}>{getSymbolByQuality(quality)}</QualitySymbol></td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Bottom>...</Bottom>
    </Container>
  );
};

export default FeatureComponent;
