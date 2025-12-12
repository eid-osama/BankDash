import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Pencil } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("edit-profile");
  const [profilePhoto, setProfilePhoto] = useState("/api/placeholder/90/90");

  // Edit Profile Formik
  const profileFormik = useFormik({
    initialValues: {
      yourName: "Charlene Reed",
      userName: "Charlene Reed",
      email: "charlenereed@gmail.com",
      password: "",
      dateOfBirth: "25 January 1990",
      presentAddress: "San Jose, California, USA",
      permanentAddress: "San Jose, California, USA",
      city: "San Jose",
      postalCode: "45962",
      country: "USA",
    },
    validationSchema: Yup.object({
      yourName: Yup.string().required("Name is required"),
      userName: Yup.string().required("Username is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string().min(8, "Password must be at least 8 characters"),
      postalCode: Yup.string().matches(/^\d+$/, "Must be a number"),
    }),
    onSubmit: (values) => {
      console.log("Profile saved:", values);
      alert("Profile updated successfully!");
    },
  });

  // Preferences Formik
  const preferencesFormik = useFormik({
    initialValues: {
      currency: "USD",
      timeZone: "(GMT-12:00) International Date Line West",
      notifyDigitalCurrency: true,
      notifyMerchantOrder: false,
      notifyRecommendations: true,
    },
    onSubmit: (values) => {
      console.log("Preferences saved:", values);
      alert("Preferences updated successfully!");
    },
  });

  // Security Formik
  const securityFormik = useFormik({
    initialValues: {
      twoFactorAuth: true,
      currentPassword: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      currentPassword: Yup.string(),
      newPassword: Yup.string().min(
        8,
        "Password must be at least 8 characters"
      ),
    }),
    onSubmit: (values) => {
      console.log("Security settings saved:", values);
      alert("Security settings updated successfully!");
    },
  });

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    profileFormik.handleSubmit();
  };

  const handlePreferencesSubmit = (e) => {
    e.preventDefault();
    preferencesFormik.handleSubmit();
  };

  const handleSecuritySubmit = (e) => {
    e.preventDefault();
    securityFormik.handleSubmit();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-card rounded-[25px] p-4 md:p-8">
          {/* Tabs */}
          <div className="flex gap-4 md:gap-12 mb-6 md:mb-10 border-b border-border overflow-x-auto">
            <button
              onClick={() => setActiveTab("edit-profile")}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
                activeTab === "edit-profile"
                  ? "text-[hsl(var(--text-primary))]"
                  : "text-muted-foreground"
              }`}
            >
              Edit Profile
              {activeTab === "edit-profile" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[hsl(var(--text-primary))] rounded-t-lg" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("preferences")}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
                activeTab === "preferences"
                  ? "text-[hsl(var(--text-primary))]"
                  : "text-muted-foreground"
              }`}
            >
              Preferences
              {activeTab === "preferences" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[hsl(var(--text-primary))] rounded-t-lg" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("security")}
              className={`pb-4 px-2 text-sm md:text-base font-medium transition-colors relative whitespace-nowrap ${
                activeTab === "security"
                  ? "text-[hsl(var(--text-primary))]"
                  : "text-muted-foreground"
              }`}
            >
              Security
              {activeTab === "security" && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[hsl(var(--text-primary))] rounded-t-lg" />
              )}
            </button>
          </div>

          {/* Edit Profile Tab */}
          {activeTab === "edit-profile" && (
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
                <div className="lg:col-span-3 flex flex-col items-center">
                  <div className="relative">
                    <Avatar className="w-[90px] h-[90px]">
                      <AvatarImage src={profilePhoto} />
                      <AvatarFallback>CR</AvatarFallback>
                    </Avatar>
                    <button
                      type="button"
                      className="absolute bottom-0 right-0 w-8 h-8 bg-[#1814F3] rounded-full flex items-center justify-center"
                    >
                      <Pencil className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-9 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Your Name
                      </Label>
                      <Input
                        name="yourName"
                        value={profileFormik.values.yourName}
                        onChange={profileFormik.handleChange}
                        onBlur={profileFormik.handleBlur}
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                      {profileFormik.touched.yourName &&
                        profileFormik.errors.yourName && (
                          <p className="text-red-500 text-xs mt-1">
                            {profileFormik.errors.yourName}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        User Name
                      </Label>
                      <Input
                        name="userName"
                        value={profileFormik.values.userName}
                        onChange={profileFormik.handleChange}
                        onBlur={profileFormik.handleBlur}
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                      {profileFormik.touched.userName &&
                        profileFormik.errors.userName && (
                          <p className="text-red-500 text-xs mt-1">
                            {profileFormik.errors.userName}
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Email
                      </Label>
                      <Input
                        type="email"
                        name="email"
                        value={profileFormik.values.email}
                        onChange={profileFormik.handleChange}
                        onBlur={profileFormik.handleBlur}
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                      {profileFormik.touched.email &&
                        profileFormik.errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {profileFormik.errors.email}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Password
                      </Label>
                      <Input
                        type="password"
                        name="password"
                        value={profileFormik.values.password}
                        onChange={profileFormik.handleChange}
                        onBlur={profileFormik.handleBlur}
                        placeholder="**********"
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                      {profileFormik.touched.password &&
                        profileFormik.errors.password && (
                          <p className="text-red-500 text-xs mt-1">
                            {profileFormik.errors.password}
                          </p>
                        )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Date of Birth
                      </Label>
                      <Input
                        name="dateOfBirth"
                        value={profileFormik.values.dateOfBirth}
                        onChange={profileFormik.handleChange}
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Present Address
                      </Label>
                      <Input
                        name="presentAddress"
                        value={profileFormik.values.presentAddress}
                        onChange={profileFormik.handleChange}
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Permanent Address
                      </Label>
                      <Input
                        name="permanentAddress"
                        value={profileFormik.values.permanentAddress}
                        onChange={profileFormik.handleChange}
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        City
                      </Label>
                      <Input
                        name="city"
                        value={profileFormik.values.city}
                        onChange={profileFormik.handleChange}
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Postal Code
                      </Label>
                      <Input
                        name="postalCode"
                        value={profileFormik.values.postalCode}
                        onChange={profileFormik.handleChange}
                        onBlur={profileFormik.handleBlur}
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                      {profileFormik.touched.postalCode &&
                        profileFormik.errors.postalCode && (
                          <p className="text-red-500 text-xs mt-1">
                            {profileFormik.errors.postalCode}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Country
                      </Label>
                      <Input
                        name="country"
                        value={profileFormik.values.country}
                        onChange={profileFormik.handleChange}
                        className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-6">
                    <Button
                      onClick={handleProfileSubmit}
                      className="h-[50px] bg-[#1814F3] hover:bg-[#1814F3]/90 rounded-[15px] px-8 md:px-12 text-sm md:text-base font-medium w-full md:w-auto"
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Preferences Tab */}
          {activeTab === "preferences" && (
            <div>
              <div className="max-w-2xl space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                      Currency
                    </Label>
                    <Input
                      name="currency"
                      value={preferencesFormik.values.currency}
                      onChange={preferencesFormik.handleChange}
                      className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                    />
                  </div>
                  <div>
                    <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                      Time Zone
                    </Label>
                    <Input
                      name="timeZone"
                      value={preferencesFormik.values.timeZone}
                      onChange={preferencesFormik.handleChange}
                      className="h-[50px] bg-background border-border rounded-[15px] text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-6 block">
                    Notification
                  </Label>
                  <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base text-[hsl(var(--text-primary))]">
                        I send or receive digital currency
                      </span>
                      <Switch
                        checked={preferencesFormik.values.notifyDigitalCurrency}
                        onCheckedChange={(checked) =>
                          preferencesFormik.setFieldValue(
                            "notifyDigitalCurrency",
                            checked
                          )
                        }
                        className="data-[state=checked]:bg-[#16DBCC]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base text-[hsl(var(--text-primary))]">
                        I receive merchant order
                      </span>
                      <Switch
                        checked={preferencesFormik.values.notifyMerchantOrder}
                        onCheckedChange={(checked) =>
                          preferencesFormik.setFieldValue(
                            "notifyMerchantOrder",
                            checked
                          )
                        }
                        className="data-[state=checked]:bg-[#16DBCC]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm md:text-base text-[hsl(var(--text-primary))]">
                        There are recommendations for my account
                      </span>
                      <Switch
                        checked={preferencesFormik.values.notifyRecommendations}
                        onCheckedChange={(checked) =>
                          preferencesFormik.setFieldValue(
                            "notifyRecommendations",
                            checked
                          )
                        }
                        className="data-[state=checked]:bg-[#16DBCC]"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button
                    onClick={handlePreferencesSubmit}
                    className="h-[50px] bg-[#1814F3] hover:bg-[#1814F3]/90 rounded-[15px] px-8 md:px-12 text-sm md:text-base font-medium w-full md:w-auto"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === "security" && (
            <div>
              <div className="max-w-xl space-y-8">
                <div>
                  <h3 className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-4">
                    Two-factor Authentication
                  </h3>
                  <div className="flex items-center justify-between py-4 gap-4">
                    <span className="text-sm md:text-[15px] text-[hsl(var(--text-primary))]">
                      Enable or disable two factor authentication
                    </span>
                    <Switch
                      checked={securityFormik.values.twoFactorAuth}
                      onCheckedChange={(checked) =>
                        securityFormik.setFieldValue("twoFactorAuth", checked)
                      }
                      className="data-[state=checked]:bg-[#16DBCC]"
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-6">
                    Change Password
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        Current Password
                      </Label>
                      <Input
                        type="password"
                        name="currentPassword"
                        value={securityFormik.values.currentPassword}
                        onChange={securityFormik.handleChange}
                        onBlur={securityFormik.handleBlur}
                        placeholder="**********"
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                      {securityFormik.touched.currentPassword &&
                        securityFormik.errors.currentPassword && (
                          <p className="text-red-500 text-xs mt-1">
                            {securityFormik.errors.currentPassword}
                          </p>
                        )}
                    </div>
                    <div>
                      <Label className="text-sm md:text-base text-[hsl(var(--text-primary))] mb-3 block">
                        New Password
                      </Label>
                      <Input
                        type="password"
                        name="newPassword"
                        value={securityFormik.values.newPassword}
                        onChange={securityFormik.handleChange}
                        onBlur={securityFormik.handleBlur}
                        placeholder="**********"
                        className="h-[50px] bg-background border-border rounded-[15px]"
                      />
                      {securityFormik.touched.newPassword &&
                        securityFormik.errors.newPassword && (
                          <p className="text-red-500 text-xs mt-1">
                            {securityFormik.errors.newPassword}
                          </p>
                        )}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-6">
                  <Button
                    onClick={handleSecuritySubmit}
                    className="h-[50px] bg-[#1814F3] hover:bg-[#1814F3]/90 rounded-[15px] px-8 md:px-12 text-sm md:text-base font-medium w-full md:w-auto"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Settings;
