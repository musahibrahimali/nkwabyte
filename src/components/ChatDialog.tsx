'use client';

import { useEffect, useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { SendHorizonal, Bot, User, Loader2 } from 'lucide-react';
import { askNkwabyteAssistant } from '@/lib/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

type Message = {
    role: 'user' | 'model';
    parts: { text: string }[];
};

const initialState: { history: Message[], error: string | null } = {
  history: [{ role: 'model', parts: [{ text: "Hello! How can I help you learn about Nkwabyte today?" }] }],
  error: null,
};

function SubmitButton() {
    const { pending } = useFormStatus();
    return (
      <Button type="submit" size="icon" disabled={pending} aria-label="Send message">
        {pending ? <Loader2 className="h-4 w-4 animate-spin" /> : <SendHorizonal className="h-4 w-4" />}
      </Button>
    );
}

function ChatMessages({ history }: { history: Message[] }) {
    const { pending } = useFormStatus();
    const messagesEndRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [history, pending]);

    return (
        <ScrollArea className="flex-grow p-6">
            <div className="space-y-4">
                {history.map((msg, index) => (
                    <div key={index} className={cn('flex items-start gap-3', { 'justify-end': msg.role === 'user' })}>
                        {msg.role === 'model' && (
                            <Avatar className="h-8 w-8 border"><AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback></Avatar>
                        )}
                        <div className={cn('max-w-xs md:max-w-md rounded-lg p-3 text-sm break-words', {
                            'bg-primary text-primary-foreground': msg.role === 'user',
                            'bg-muted': msg.role === 'model',
                        })}>
                            {msg.parts[0].text}
                        </div>
                        {msg.role === 'user' && (
                            <Avatar className="h-8 w-8 border"><AvatarFallback><User className="h-5 w-5"/></AvatarFallback></Avatar>
                        )}
                    </div>
                ))}
                {pending && (
                    <div className="flex items-start gap-3">
                        <Avatar className="h-8 w-8 border"><AvatarFallback><Bot className="h-5 w-5"/></AvatarFallback></Avatar>
                        <div className="bg-muted rounded-lg p-3 flex items-center justify-center">
                            <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
        </ScrollArea>
    );
}

export default function ChatDialog() {
    const [state, formAction] = useFormState(askNkwabyteAssistant, initialState);
    const formRef = useRef<HTMLFormElement>(null);
    const { pending } = useFormStatus();

    useEffect(() => {
        if (!pending) {
            formRef.current?.reset();
        }
    }, [pending, state.history]);

    return (
        <DialogContent className="sm:max-w-[425px] md:max-w-[600px] h-[80vh] flex flex-col p-0 gap-0">
            <DialogHeader className="p-6 pb-4 border-b">
                <DialogTitle>Chat with Nkwabyte</DialogTitle>
                <DialogDescription>
                    Ask our AI assistant anything about our company, services, or courses.
                </DialogDescription>
            </DialogHeader>
            <form action={formAction} ref={formRef} className="flex flex-col flex-grow min-h-0">
                <ChatMessages history={state.history} />
                <DialogFooter className='sm:justify-start p-4 border-t bg-background'>
                    <div className='w-full'>
                        <div className="flex items-center gap-2">
                            <Input name="message" placeholder="Type your message..." autoComplete="off" disabled={pending} />
                            <input type="hidden" name="history" value={JSON.stringify(state.history)} />
                            <SubmitButton />
                        </div>
                        {state.error && <p className="pt-2 text-xs text-destructive">{state.error}</p>}
                    </div>
                </DialogFooter>
            </form>
        </DialogContent>
    );
}
