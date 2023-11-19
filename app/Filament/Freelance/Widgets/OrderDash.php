<?php

namespace App\Filament\Freelance\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use App\Filament\Freelance\Resources\OrderResource\Pages\ListOrders;
use Filament\Widgets\Concerns\InteractsWithPageTable;

use Filament\Widgets\StatsOverviewWidget\Stat;

class OrderDash extends BaseWidget
{


    use InteractsWithPageTable;

    protected function getTablePage(): string
    {
        return ListOrders::class;
    }
    protected function getStats(): array
    {
        return [
            Stat::make('Total Revenue', auth()->user()->freelance->solde .' $'),
            Stat::make('Nouveau commande', $this->getPageTableQuery()->where('status','completed')->count()),
            Stat::make('Commande Livré', $this->getPageTableQuery()->whereHas('feedback', function($q){
                $q->where('etat','=','Livré');
            })->count())
            ->description('3% increase')
            ->descriptionIcon('heroicon-m-arrow-trending-up')
            ->chart([7, 2, 10, 3, 15, 4, 17]),
        ];
    }
}
