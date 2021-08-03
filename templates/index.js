const componentTemplate = (fullFileName, cutFileName, formatName) => `import React from 'react';
import Icon from 'components/common/Icon';
import ${cutFileName} from '../src/${fullFileName}';

type TIconComponentProps = {
  className?: string;
};

const ${formatName}: React.FunctionComponent<TIconComponentProps> = ({ className }) => (
  <Icon className={className} file={${cutFileName}} />
);

export default ${formatName};
`;

const exportTemplate = (formatName) => `export { default as ${formatName} } from './components/${formatName}';
`;

module.exports = { componentTemplate, exportTemplate };
