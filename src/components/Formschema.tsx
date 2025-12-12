// import { useState } from "react";
// import { useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import { format } from "date-fns";
// import { CalendarIcon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import {
//   Form,
//   FormControl,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Calendar } from "@/components/ui/calendar";
// import { toast } from "@/hooks/use-toast";

// const formSchema = z.object({
//   cardType: z.string().min(1, "Please select a card type"),
//   nameOnCard: z.string().min(2, "Name must be at least 2 characters").max(100),
//   cardNumber: z
//     .string()
//     .regex(/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/, "Invalid card number format"),
//   expirationDate: z.date({
//     required_error: "Please select an expiration date",
//   }),
// });

// type FormData = z.infer<typeof formSchema>;

// export function CreditCardForm() {
//   const [cardNumber, setCardNumber] = useState("");

//   const form = useForm<FormData>({
//     resolver: zodResolver(formSchema),
//     defaultValues: {
//       cardType: "",
//       nameOnCard: "",
//       cardNumber: "",
//     },
//   });

//   const formatCardNumber = (value: string) => {
//     const digits = value.replace(/\D/g, "");
//     const groups = digits.match(/.{1,4}/g);
//     return groups ? groups.join(" ") : digits;
//   };

//   const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const formatted = formatCardNumber(e.target.value);
//     if (formatted.replace(/\s/g, "").length <= 16) {
//       setCardNumber(formatted);
//       form.setValue("cardNumber", formatted);
//     }
//   };

//   const onSubmit = (data: FormData) => {
//     console.log("Form submitted:", data);
//     toast({
//       title: "Card Added Successfully",
//       description: "Your credit card has been added to your account.",
//     });
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto">
//       <div className="bg-card rounded-lg border border-border p-8 shadow-sm">
//         <p className="text-[hsl(var(--description-text))] text-sm leading-relaxed mb-8">
//           Credit Card generally means a plastic card issued by Scheduled
//           Commercial Banks assigned to a Cardholder, with a credit limit, that
//           can be used to purchase goods and services on credit or obtain cash
//           advances.
//         </p>

//         <Form {...form}>
//           <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="cardType"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-foreground font-medium">
//                       Card Type
//                     </FormLabel>
//                     <Select
//                       onValueChange={field.onChange}
//                       defaultValue={field.value}
//                     >
//                       <FormControl>
//                         <SelectTrigger className="bg-form-bg border-input">
//                           <SelectValue placeholder="Select card type" />
//                         </SelectTrigger>
//                       </FormControl>
//                       <SelectContent>
//                         <SelectItem value="classic">Classic</SelectItem>
//                         <SelectItem value="gold">Gold</SelectItem>
//                         <SelectItem value="platinum">Platinum</SelectItem>
//                         <SelectItem value="premium">Premium</SelectItem>
//                       </SelectContent>
//                     </Select>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="nameOnCard"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-foreground font-medium">
//                       Name On Card
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="Enter cardholder name"
//                         className="bg-form-bg border-input"
//                         {...field}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <FormField
//                 control={form.control}
//                 name="cardNumber"
//                 render={({ field }) => (
//                   <FormItem>
//                     <FormLabel className="text-foreground font-medium">
//                       Card Number
//                     </FormLabel>
//                     <FormControl>
//                       <Input
//                         placeholder="**** **** **** ****"
//                         className="bg-form-bg border-input"
//                         value={cardNumber}
//                         onChange={handleCardNumberChange}
//                         maxLength={19}
//                       />
//                     </FormControl>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />

//               <FormField
//                 control={form.control}
//                 name="expirationDate"
//                 render={({ field }) => (
//                   <FormItem className="flex flex-col">
//                     <FormLabel className="text-foreground font-medium mb-2">
//                       Expiration Date
//                     </FormLabel>
//                     <Popover>
//                       <PopoverTrigger asChild>
//                         <FormControl>
//                           <Button
//                             variant="outline"
//                             className={cn(
//                               "w-full pl-3 text-left font-normal bg-form-bg border-input hover:bg-secondary",
//                               !field.value && "text-muted-foreground"
//                             )}
//                           >
//                             {field.value ? (
//                               format(field.value, "dd MMMM yyyy")
//                             ) : (
//                               <span>Select expiration date</span>
//                             )}
//                             <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
//                           </Button>
//                         </FormControl>
//                       </PopoverTrigger>
//                       <PopoverContent className="w-auto p-0" align="start">
//                         <Calendar
//                           mode="single"
//                           selected={field.value}
//                           onSelect={field.onChange}
//                           disabled={(date) => date < new Date()}
//                           initialFocus
//                           className="pointer-events-auto"
//                         />
//                       </PopoverContent>
//                     </Popover>
//                     <FormMessage />
//                   </FormItem>
//                 )}
//               />
//             </div>

//             <Button
//               type="submit"
//               className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-2.5 rounded-lg transition-colors"
//             >
//               Add Card
//             </Button>
//           </form>
//         </Form>
//       </div>
//     </div>
//   );
// }
