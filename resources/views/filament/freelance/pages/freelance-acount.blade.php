<x-filament-panels::page>


<form wire:submit.prevent='modifier'>

    {{$this->form}}

    <div class="text-right">
        <x-filament::button  type="submit" form="submit" class="align-right">
            Modifier
        </x-filament::button>
    </div>

<form>


</x-filament-panels::page>
