-module(send_message).
-export([send_status/1]).

send_status({urgent, Sender, Receiver, status}) ->

    
