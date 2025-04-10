import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle } from "lucide-react"

export default function PricingPage() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals and small teams just getting started.",
      price: {
        monthly: "$29",
        annually: "$290",
      },
      features: ["Up to 5 users", "5GB storage", "Basic analytics", "API access", "Email support"],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses with more advanced needs.",
      price: {
        monthly: "$79",
        annually: "$790",
      },
      features: [
        "Up to 20 users",
        "20GB storage",
        "Advanced analytics",
        "API access",
        "Priority email support",
        "Custom integrations",
        "Team collaboration tools",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Advanced features and support for large organizations.",
      price: {
        monthly: "Custom",
        annually: "Custom",
      },
      features: [
        "Unlimited users",
        "Unlimited storage",
        "Enterprise analytics",
        "API access",
        "24/7 phone & email support",
        "Custom integrations",
        "Team collaboration tools",
        "Dedicated account manager",
        "Custom security controls",
        "SLA guarantees",
      ],
      cta: "Contact Sales",
      popular: false,
    },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Transparent Pricing</h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that's right for your business. All plans include a 14-day free trial.
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Tabs defaultValue="monthly" className="w-full max-w-[800px]">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
              <TabsTrigger value="annually">Annual Billing (Save 15%)</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="monthly" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price.monthly}</span>
                      {plan.price.monthly !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <Link href={plan.name === "Enterprise" ? "/company/contact" : "/signup"}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="annually" className="mt-0">
            <div className="grid md:grid-cols-3 gap-6">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                  {plan.popular && (
                    <div className="bg-primary text-primary-foreground text-center py-1 text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="mb-6">
                      <span className="text-4xl font-bold">{plan.price.annually}</span>
                      {plan.price.annually !== "Custom" && <span className="text-muted-foreground">/year</span>}
                    </div>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full" variant={plan.popular ? "default" : "outline"}>
                      <Link href={plan.name === "Enterprise" ? "/company/contact" : "/signup"}>{plan.cta}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground">
            Find answers to common questions about our pricing and plans.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 max-w-[800px] mx-auto">
          {[
            {
              question: "Can I change plans later?",
              answer:
                "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept all major credit cards, PayPal, and bank transfers. For Enterprise plans, we also offer invoicing options.",
            },
            {
              question: "Is there a free trial available?",
              answer:
                "Yes, all plans include a 14-day free trial with no credit card required. You can test all features before committing.",
            },
            {
              question: "What happens when I reach my user limit?",
              answer:
                "You'll receive a notification when you approach your user limit. You can upgrade your plan at any time to add more users.",
            },
          ].map((faq, index) => (
            <Card key={index} className="p-6">
              <h3 className="font-bold mb-2">{faq.question}</h3>
              <p className="text-muted-foreground">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-muted/40 rounded-lg p-8 text-center space-y-4">
        <h2 className="text-2xl font-bold">Need a custom plan?</h2>
        <p className="max-w-[600px] mx-auto text-muted-foreground">
          Our team can create a tailored solution to meet your specific requirements and budget.
        </p>
        <Button asChild>
          <Link href="/company/contact">Contact Sales</Link>
        </Button>
      </div>
    </div>
  )
}

