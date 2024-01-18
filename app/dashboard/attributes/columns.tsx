'use client';

import { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui/button';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { EditAttribute } from './edit-attribute';

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
      const { id, attribute } = row.original;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant='outline'
              className='bg-blue-700 hover:bg-blue-600 text-white hover:text-white'
            >
              <span>Edit</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Attribute</DialogTitle>
              <DialogDescription>
                <EditAttribute
                  attributeId={id}
                  attributeName={attribute}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
