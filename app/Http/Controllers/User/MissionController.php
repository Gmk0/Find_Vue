<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\{TransactionResourceData, MissionResourceData};
use App\Models\Mission;
use Illuminate\Support\Facades\Storage;

class MissionController extends Controller
{
    //


    public function missionsList()
    {
        $mission = auth()->user()->missions;
        //dd($mission);
        return Inertia::render(
            'User/Mission/MissionUser',
            ['missions' => MissionResourceData::collection($mission)]
        );
    }
    public function missionEdit($mission_numero)
    {
        $mission = Mission::where('mission_numero', $mission_numero)->first();
        return Inertia::render('User/Mission/MissionMod',['mission' => MissionResourceData::make($mission)]);
    }

    public function missionEditSave(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'budget' => 'required|numeric',
            'dateF' => 'required',
            'dateD' => 'required',
            'mission_id' => 'required',
            'category_id' => 'required'
        ]);

        $mission = Mission::findOrFail($request->mission_id);

        $filesPaths = $mission->files ?? []; // Récupération des anciens chemins des fichiers

        if ($request->hasFile('image')) {
            $files = $request->file('image');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('missions', $fileName, 'public'); // Enregistrer le fichier dans 'public/missions' avec le nom d'origine
                $filesPaths[] = '/missions/' . $fileName; // Enregistrer les nouveaux chemins des fichiers
            }
        }

        $mission->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'files' => $filesPaths, // Sauvegarde des chemins des fichiers dans la base de données
            'budget' => $request->budget,
            'begin_mission' => $request->dateD,
            'end_mission' => $request->dateF,
            'exigences' => $request->exigence,
        ]);


    }

    public function removeFileMission(Request $request)
    {

        $request->validate([
            'mission_id' => 'required', // Valide que l'ID de la mission est présent
            'file_index' => 'required', // Valide que l'index du fichier à supprimer est présent
        ]);

        $mission = Mission::findOrFail($request->mission_id);

        try{
            if (isset($mission->files[$request->file_index])) {
                $filePath = $mission->files[$request->file_index];

                if (Storage::disk('public')->exists($filePath)) {
                    Storage::disk('public')->delete($filePath); // Supprime le fichier du stockage

                    unset($mission->files[$request->file_index]); // Supprime le chemin du fichier de la liste des fichiers de la mission
                    $mission->save(); // Enregistre les modifications dans la base de données

                   // return "Fichier supprimé avec succès de la mission.";
                }
            }

        }catch(\Exception $e){

            dd($e->getMessage());
        }



        //return "Impossible de trouver ou de supprimer le fichier de la mission.";
    }


}
