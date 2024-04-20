import React from 'react';
import { Badge } from './badge';

interface Props {
  tags: Array<{ id: string; label: string, color: string }>;
}

const Tags: React.FC<Props> = props => {
  // props and metadata
  const { tags = [] } = props;

  // states

  // configs

  // constants

  // actions

  // effects

  // renderers
  if (tags.length === 0) {
    return null;
  }

  return (
    <div className='flex items-center space-x-2'>
      {tags.map(tag => <Badge variant='default' key={tag.id}>{tag.label}</Badge>)}
    </div>
  )
};

export default Tags;