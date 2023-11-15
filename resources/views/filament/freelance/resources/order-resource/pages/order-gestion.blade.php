<x-filament-panels::page>




<x-filament::card>
    <form wire:submit.prevent="submit" class="space-y-6">

        {{ $this->form }}

        <div class="text-right">
            <x-filament::button type="submit" form="submit" class="align-right">
                Modifier
            </x-filament::button>
        </div>
    </form>
</x-filament::card>


</x-filament-panels::page>
