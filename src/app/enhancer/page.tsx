import EnhancerForm from "@/components/EnhancerForm";

export default function EnhancerPage() {
    return (
        <div className="container py-12">
            <div className="max-w-2xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline">Case Study Enhancer</h1>
                    <p className="text-lg text-muted-foreground mt-2">
                        Describe your case study, and our AI will suggest relevant tools and technologies that were likely used.
                    </p>
                </div>
                <EnhancerForm />
            </div>
        </div>
    );
}
