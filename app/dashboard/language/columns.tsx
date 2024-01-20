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

import { EditLanguage } from './edit-language';

export type Languages = {
  id: string;
  languageName: 'Tamil' | 'Telugu' | 'Malayalam' | 'Kannada';
  activeStatus: boolean;
  createdBy: string;
  createdAt: string;
};

export const columns: ColumnDef<Languages>[] = [
  {
    accessorKey: 'id',
    header: '#',
  },
  {
    accessorKey: 'languageName',
    header: 'Language',
  },
  {
    accessorKey: 'activeStatus',
    header: 'Status',
  },
  {
    accessorKey: 'createdBy',
    header: 'Created By',
  },
  {
    accessorKey: 'createdAt',
    header: 'Created At',
  },

  {
    id: 'actions',
    cell: ({ row }) => {
      const { languageName, id } = row.original;

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
                <EditLanguage
                  languageId={id}
                  languageName={languageName}
                />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
