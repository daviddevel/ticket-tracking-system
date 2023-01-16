<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Ticket;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;



class TicketController extends Controller
{
   /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Ticket::orderBy('created_at', 'DESC')->get();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $newTicket = new Ticket;
        $newTicket->desc =  $request->ticket['desc'];
        $newTicket->summary =  $request->ticket['summary'];
        $newTicket->priority = $request->ticket['priority'];
        $newTicket->type = $request->ticket['type'];
        $newTicket->save();

        return response(['message' => 'Ticket updated.'], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        $ticket = Ticket::find($id);

        if($ticket) {
            $ticket->desc =  $request->ticket['desc'];
            $ticket->summary =  $request->ticket['summary'];
            $ticket->priority = $request->ticket['priority'];
            $ticket->type = $request->ticket['type'];
            $ticket->resolved = $request->ticket['resolved'] ? true:false;
            $ticket->resolved_at = $request->ticket['resolved'] ? Carbon::now():null;
            $ticket->save();
            return response([
                'message' => 'Ticket updated.'
            ], 200);
        }

        return response([
            'message' => "Ticket not found"
        ], 502); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ticket = Ticket::find($id);

        if($ticket) {
            $ticket->delete();
            return response([
                'message' => 'Ticket deleted.'
            ], 200);
        }

        return response([
            'message' => "Ticket not found"
        ], 502); 
    }
}

