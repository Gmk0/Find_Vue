<?php

namespace App\Filament\Freelance\Resources\OrderResource\Widgets;

use App\Filament\Freelance\Resources\OrderResource\Pages\ListOrders;
use Filament\Widgets\Concerns\InteractsWithPageTable;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OrderStat extends BaseWidget
{

    use InteractsWithPageTable;

    protected function getTablePage(): string
    {
        return ListOrders::class;
    }


    protected function getStats(): array
    {
        return [
            Stat::make('Total commande', $this->getPageTableQuery()->count()),
            Stat::make('Bounce rate', $this->getPageTableQuery()->where('status','completed')->count()),
            Stat::make('Average time on page', '3:12'),
        ];
    }
}
