'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

export type Languages = {
  id: string;
  attribute: string;
  activeStatus: boolean;
};

export const columns: ColumnDef<Languages>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'attribute',
    header: 'Attribute',
  },
  {
    accessorKey: 'activeStatus',
    header: 'Active Status',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const language = row.original;
      console.log(language);
      return <Button variant='default'>Edit</Button>;
    },
  },
];
