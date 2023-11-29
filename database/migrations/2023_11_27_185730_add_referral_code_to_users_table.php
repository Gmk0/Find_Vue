<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('referral_code')->nullable();
            $table->foreignUuid('referral_by')->constrained('users')->nullable();
            $table->boolean('gift_used')->default(false);
           // $table->foreign('referral_by')->references('id')->on('users');
            //
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
            $table->dropColumn('referral_code');
            $table->dropColumn('referral_by');
            $table->dropColumn('gift_used');

        });
    }
};
