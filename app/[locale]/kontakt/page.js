'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

const routeKeys = ['historicCenter', 'borsky', 'divadlo', 'river'];

export default function KontaktPage() {
  const t = useTranslations('contact');
  const r = useTranslations('routes');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    route: '',
    note: ''
  });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleRoute(value) {
    setForm((prev) => ({ ...prev, route: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    // Simulate sending — replace with real API call later
    await new Promise((res) => setTimeout(res, 1200));
    setStatus('success');
  }

  return (
    <>
      {/* Header */}
      <section className="bg-[#111827] pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">{t('title')}</h1>
            <p className="text-xl text-gray-400 max-w-xl mx-auto">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <div className="bg-[#111827] text-white p-8 rounded-2xl h-fit sticky top-24">
                <h2 className="text-xl font-bold mb-6">Kontaktní informace</h2>
                <div className="space-y-5">
                  <a
                    href={`tel:${t('info.phone')}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#F97316]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors">
                      <Phone className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Telefon</div>
                      <div className="font-medium group-hover:text-[#F97316] transition-colors">{t('info.phone')}</div>
                    </div>
                  </a>
                  <a
                    href={`mailto:${t('info.email')}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 bg-[#F97316]/20 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#F97316] transition-colors">
                      <Mail className="w-5 h-5 text-[#F97316] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">E-mail</div>
                      <div className="font-medium group-hover:text-[#F97316] transition-colors">{t('info.email')}</div>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#F97316]/20 rounded-xl flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#F97316]" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 mb-0.5">Místo</div>
                      <div className="font-medium">{t('info.location')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                {status === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{t('form.success')}</h3>
                    <p className="text-gray-500">Brzy se vám ozvu!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate aria-label="Poptávkový formulář">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* First name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="firstName">{t('form.firstName')} *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={form.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Jan"
                        />
                      </div>
                      {/* Last name */}
                      <div className="space-y-1.5">
                        <Label htmlFor="lastName">{t('form.lastName')} *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={form.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Novák"
                        />
                      </div>
                      {/* Email */}
                      <div className="space-y-1.5">
                        <Label htmlFor="email">{t('form.email')} *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jan@example.cz"
                        />
                      </div>
                      {/* Phone */}
                      <div className="space-y-1.5">
                        <Label htmlFor="phone">{t('form.phone')}</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+420 777 000 000"
                        />
                      </div>
                      {/* Date */}
                      <div className="space-y-1.5">
                        <Label htmlFor="date">{t('form.date')}</Label>
                        <Input
                          id="date"
                          name="date"
                          type="date"
                          value={form.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                      {/* Time */}
                      <div className="space-y-1.5">
                        <Label htmlFor="time">{t('form.time')}</Label>
                        <Input
                          id="time"
                          name="time"
                          type="time"
                          value={form.time}
                          onChange={handleChange}
                        />
                      </div>
                      {/* Route */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="route">{t('form.route')}</Label>
                        <Select onValueChange={handleRoute} value={form.route}>
                          <SelectTrigger id="route">
                            <SelectValue placeholder={t('form.selectRoute')} />
                          </SelectTrigger>
                          <SelectContent>
                            {routeKeys.map((key) => (
                              <SelectItem key={key} value={key}>
                                {r(`items.${key}.name`)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      {/* Note */}
                      <div className="space-y-1.5 sm:col-span-2">
                        <Label htmlFor="note">{t('form.note')}</Label>
                        <Textarea
                          id="note"
                          name="note"
                          value={form.note}
                          onChange={handleChange}
                          placeholder={t('form.notePlaceholder')}
                          rows={4}
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={status === 'sending'}
                      className="mt-6 w-full bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold py-3 text-base rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      {status === 'sending' ? (
                        <span className="flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          {t('form.sending')}
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          {t('form.submit')}
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
