<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function dashboard()
    {
        return Inertia::render('Admin/Dashboard');
    }

    public function printQr($qr)
    {
        $qr_decode = base64_decode($qr);

        return view('print.qr-table-code')->with('qr_code', $qr_decode);
    }
}
