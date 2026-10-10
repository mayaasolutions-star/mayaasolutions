import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { getBreadcrumbSchema } from '../utils/seoMetadata';
import { 
  ShieldCheck, 
  FileText, 
  Briefcase, 
  CreditCard, 
  Layers, 
  RefreshCw, 
  Download, 
  Ban, 
  Copyright, 
  Lock, 
  ExternalLink, 
  Sparkles, 
  TrendingUp, 
  Scale, 
  AlertTriangle, 
  XCircle, 
  Clock, 
  Globe2, 
  Mail,
  ChevronRight,
  Info
} from 'lucide-react';

interface TocSection {
  id: string;
  number: string;
  title: string;
}

const TOC_SECTIONS: TocSection[] = [
  { id: 'section-1', number: '01', title: 'Introduction & Contracting Party' },
  { id: 'section-2', number: '02', title: 'Scope of Services & Catalog Deliverables' },
  { id: 'section-3', number: '03', title: 'Eligibility & Business Authority' },
  { id: 'section-4', number: '04', title: 'Enquiries, Quotations & Contract Formation' },
  { id: 'section-5', number: '05', title: 'Pricing, Currency, Taxes & Invoicing' },
  { id: 'section-6', number: '06', title: 'Project Scope, Timelines & Client Responsibilities' },
  { id: 'section-7', number: '07', title: 'Revisions, Acceptance & Material Defects' },
  { id: 'section-8', number: '08', title: 'Digital Products & Instant Downloads' },
  { id: 'section-9', number: '09', title: 'Cancellation, Termination & Refund Framework' },
  { id: 'section-10', number: '10', title: 'Intellectual Property & Deliverable Transfer' },
  { id: 'section-11', number: '11', title: 'Confidentiality & Data Protection Governance' },
  { id: 'section-12', number: '12', title: 'Third-Party Services, Cloud Platforms & APIs' },
  { id: 'section-13', number: '13', title: 'AI-Assisted Workflow & Intellectual Safeguards' },
  { id: 'section-14', number: '14', title: 'Marketing, Growth & Business Outcomes' },
  { id: 'section-15', number: '15', title: 'Warranties & Express Service Commitments' },
  { id: 'section-16', number: '16', title: 'Limitation of Liability & Liability Cap' },
  { id: 'section-17', number: '17', title: 'Indemnification & Third-Party Claims' },
  { id: 'section-18', number: '18', title: 'Suspension & Termination Mechanics' },
  { id: 'section-19', number: '19', title: 'Force Majeure' },
  { id: 'section-20', number: '20', title: 'Electronic Communications & Online Assent' },
  { id: 'section-21', number: '21', title: 'Governing Law & Dispute Resolution' },
  { id: 'section-22', number: '22', title: 'Amendments & Modifications' },
  { id: 'section-23', number: '23', title: 'Severability, Entire Agreement & Assignment' },
  { id: 'section-24', number: '24', title: 'Official Inquiries & Contact Directory' },
];

export const TermsPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('section-1');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Terms & Conditions | Mayaa Solutions" 
        description="Comprehensive global Terms & Conditions governing bespoke digital engineering, brand strategy, business systems, starter packages, and digital products at Mayaa Solutions." 
        canonicalUrl="https://mayaasolutions.in/terms-conditions"
        schema={[
          getBreadcrumbSchema([
            { name: 'Home', urlPath: '/' },
            { name: 'Terms & Conditions', urlPath: '/terms-conditions' },
          ]),
        ]}
      />

      <main className="pt-32 pb-24 bg-studio-950 text-studio-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          
          {/* Header Banner */}
          <div className="space-y-4 max-w-4xl">
            <span className="text-xs font-mono text-studio-400 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-studio-100" /> Commercial & Legal Framework
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-studio-100 tracking-tight">
              Terms & Conditions
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-studio-400">
              <span>Effective Date: 10 October 2026</span>
              <span>•</span>
              <span>Last Updated: 10 October 2026</span>
              <span>•</span>
              <span>Version: 2.1 (International Global Edition)</span>
            </div>
            <p className="text-sm sm:text-base text-studio-300 font-normal leading-relaxed pt-2">
              These Terms and Conditions govern your engagement with Mayaa Solutions, whether you retain our engineering and brand consultancy services under an accepted Statement of Work, purchase modular starter packages, acquire downloadable digital products through our web store, or browse our website and publications.
            </p>
          </div>

          {/* Quick Notice Box for Transparency */}
          <div className="p-6 rounded-2xl bg-white border border-studio-850 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs sm:text-sm text-studio-300">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-studio-100 shrink-0 mt-0.5" />
              <div>
                <strong className="text-studio-100 block font-semibold mb-0.5">Commercial Structure Summary</strong>
                <span>We distinguish between custom professional client engagements (governed by tailored proposals, milestone deposits, and statements of work) and self-service online digital offerings (subject to checkout disclosures, instant fulfilment, and statutory consumer rights).</span>
              </div>
            </div>
          </div>

          {/* Main Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Sticky Table of Contents (Desktop) */}
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 space-y-4">
              <div className="bg-white p-6 rounded-3xl border border-studio-850 shadow-sm space-y-4 max-h-[calc(100vh-140px)] overflow-y-auto">
                <div className="flex items-center justify-between pb-3 border-b border-studio-850">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-studio-400">
                    Table of Contents
                  </span>
                  <span className="text-[10px] font-mono text-studio-400">24 Sections</span>
                </div>
                <nav className="space-y-1">
                  {TOC_SECTIONS.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-colors flex items-center justify-between group ${
                        activeSection === sec.id
                          ? 'bg-studio-900 text-studio-100 font-bold'
                          : 'text-studio-400 hover:text-studio-100 hover:bg-studio-950'
                      }`}
                    >
                      <span className="flex items-center gap-2 truncate">
                        <span className="font-mono text-[10px] text-studio-400 shrink-0">{sec.number}</span>
                        <span className="truncate">{sec.title}</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 ml-1" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Right Column: Comprehensive Terms Clauses */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-white p-8 md:p-12 rounded-3xl border border-studio-850 shadow-sm space-y-12 text-sm sm:text-base text-studio-300 font-normal leading-relaxed">
                
                {/* 1. Introduction and Contracting Party */}
                <section id="section-1" className="space-y-4 pt-2">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">01</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Introduction and Contracting Party
                    </h2>
                  </div>
                  <p>
                    These Terms and Conditions (<strong className="text-studio-100">"Terms"</strong>) constitute a legally binding agreement between you (<strong className="text-studio-100">"Client"</strong>, <strong className="text-studio-100">"Customer"</strong>, <strong className="text-studio-100">"Purchaser"</strong>, or <strong className="text-studio-100">"You"</strong>) and <strong className="text-studio-100">Mayaa Solutions</strong> (<strong className="text-studio-100">"Mayaa"</strong>, <strong className="text-studio-100">"we"</strong>, <strong className="text-studio-100">"us"</strong>, or <strong className="text-studio-100">"our"</strong>).
                  </p>
                  <p>
                    <strong className="text-studio-100">Operating Identity:</strong> Mayaa Solutions operates from its technology and design studio in Bangalore (Bengaluru), Karnataka, India, serving clients across India and international markets including North America, the United Kingdom, the European Union, the United Arab Emirates, Saudi Arabia, Singapore, and Australia. Formal corporate registration details, tax identification numbers (including Goods and Services Tax / GSTIN, where applicable), and legal entity notices are formally documented in our tailored commercial proposals, Statements of Work, and formal tax invoices issued to contracting parties.
                  </p>
                  <p>
                    <strong className="text-studio-100">Scope of Application:</strong> These Terms govern: (a) access to and use of our public website (<a href="https://mayaasolutions.in/" className="text-studio-100 font-semibold underline">https://mayaasolutions.in/</a>) and published insights; (b) professional client engagements for bespoke brand building, custom website design, web engineering, digital marketing, and business management systems; and (c) purchases of digital toolkits, guidebooks, and starter service packages transacted through our website.
                  </p>
                  <p>
                    <strong className="text-studio-100">Official Notice Address:</strong> Formal contractual inquiries, legal notices, and compliance communications must be addressed to <a href="mailto:contact@mayaasolutions.in" className="text-studio-100 font-semibold underline">contact@mayaasolutions.in</a>.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 2. Scope of Services */}
                <section id="section-2" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">02</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Scope of Services & Catalog Deliverables
                    </h2>
                  </div>
                  <p>
                    Mayaa Solutions delivers integrated digital transformation, branding, and bespoke software engineering. Our service portfolio includes:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Brand Building & Strategic Identity:</strong> Brand architecture, positioning narrative, visual identity systems, corporate typography, logo vectors, and guidelines.</li>
                    <li><strong className="text-studio-100">Websites & Digital Experiences:</strong> High-performance modern web platforms, responsive frontends, interactive corporate portfolios, headless CMS integrations, and search visibility engineering (SEO/AEO).</li>
                    <li><strong className="text-studio-100">Personalised Business Systems (BMS):</strong> Tailored enterprise operational tools, custom CRM workflows, role-based access management, inventory and lead pipelines, and database architecture.</li>
                    <li><strong className="text-studio-100">Growth Management & Digital Marketing:</strong> Customer journey mapping, commercial growth architecture, marketing strategy, analytics instrumentation, and conversion funnel optimization.</li>
                    <li><strong className="text-studio-100">Business Consulting & Strategic Advisory:</strong> Architectural roadmaps, digital operational audits, and technical advisory.</li>
                    <li><strong className="text-studio-100">Starter Service Packages & Digital Products:</strong> Fixed-price exploratory service sprints (e.g., brand naming, logo creation, starter websites) and downloadable digital frameworks, guides, and templates.</li>
                  </ul>
                  <p>
                    <strong className="text-studio-100">Independent Engagements:</strong> Each professional engagement is distinct. Nothing on our website implies that every service or feature is included in a specific engagement. The exact scope, deliverables, acceptance criteria, milestones, fees, and schedule for any bespoke project are defined exclusively in the applicable written Proposal, Statement of Work (SOW), or Master Services Agreement (MSA) signed or confirmed in writing by the parties.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 3. Eligibility and Authority */}
                <section id="section-3" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">03</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Eligibility & Business Authority
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Legal Capacity:</strong> You represent and warrant that you possess full legal capacity to enter into a legally binding contract under the Indian Contract Act, 1872, or the laws of your domestic jurisdiction. If you are an individual, you confirm that you are at least eighteen (18) years of age or have reached the legal age of majority in your jurisdiction.
                  </p>
                  <p>
                    <strong className="text-studio-100">Corporate Authority:</strong> If you accept these Terms, request a proposal, or place an order on behalf of a company, partnership, enterprise, or other legal entity, you represent and warrant that you possess actual corporate authority to bind that entity to these Terms and any associated Statement of Work.
                  </p>
                  <p>
                    <strong className="text-studio-100">Consumer Transactions:</strong> Where an individual engages Mayaa Solutions acting primarily for personal, domestic, or family purposes outside of business or professional trade (<strong className="text-studio-100">"Consumer"</strong>), mandatory statutory consumer protection rights provided under applicable law (including the Indian Consumer Protection Act, 2019, the EU Consumer Rights Directive, or UAE Federal Law No. 15 of 2020) remain unaffected and are preserved.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 4. Enquiries, Quotations and Contract Formation */}
                <section id="section-4" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">04</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Enquiries, Quotations & Contract Formation
                    </h2>
                  </div>
                  <p>
                    We distinguish between preparatory interactions and binding contractual agreements:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Website Enquiries & Preliminary Consultations:</strong> Submitting a contact form, email inquiry, or participating in a discovery video call is an invitation to treat. It does not create an obligation on Mayaa Solutions to undertake work or hold resources.</li>
                    <li><strong className="text-studio-100">Estimates & Quotations:</strong> Any informal price indication, timeline estimate, or preliminary quotation is non-binding and remains valid for fourteen (14) calendar days unless specified otherwise in writing.</li>
                    <li><strong className="text-studio-100">Formal Proposals & Statements of Work:</strong> A binding contract for bespoke services is formed only when both parties execute a formal Statement of Work, or when the Client confirms acceptance of a written proposal and completes the initial milestone deposit.</li>
                    <li><strong className="text-studio-100">Catalog Starter Orders & Digital Purchases:</strong> A binding contract for online digital downloads or fixed starter packages is formed when the Customer submits an order via our online checkout modal, accepts these Terms, and the payment gateway confirms successful settlement.</li>
                  </ul>
                  <p>
                    <strong className="text-studio-100">Order of Precedence:</strong> In the event of an irreconcilable conflict between documents governing a bespoke client engagement, the following order of precedence shall apply: (1) Any formal signed Master Services Agreement (MSA); (2) The applicable project-specific Statement of Work (SOW) or accepted Proposal; (3) These general Terms and Conditions; (4) Website marketing materials or informal communications.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 5. Pricing, Currency, Taxes and Payment */}
                <section id="section-5" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">05</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Pricing, Currency, Taxes & Invoicing
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Transparent Pricing & Currencies:</strong> Custom project fees are quoted and invoiced on a fixed-scope milestone basis in agreed currencies (typically INR for domestic Indian clients; USD, EUR, GBP, AED, SGD, or AUD for international corporate clients). Online catalog products and starter packages are billed in INR (inclusive of all applicable taxes) as indicated during checkout.
                  </p>
                  <p>
                    <strong className="text-studio-100">Taxes & Statutory Levies:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Domestic Indian Clients:</strong> Invoices are subject to Goods and Services Tax (GST) at statutory rates (CGST + SGST or IGST). Valid GSTIN details must be supplied prior to invoicing for tax credit purposes.</li>
                    <li><strong className="text-studio-100">International Clients:</strong> Services rendered to overseas clients outside India qualify as export of services under Indian GST law, subject to statutory conditions. International clients are responsible for any local reverse-charge VAT, withholding taxes, import duties, or sales taxes required under the laws of their home country. Payments must be remitted net of local deductions unless prohibited by double-taxation conventions.</li>
                  </ul>
                  <p>
                    <strong className="text-studio-100">Transaction & Foreign Exchange Fees:</strong> Intermediary banking fees, wire charges, foreign currency conversion commissions, and payment provider fees incurred at the remitting bank's side are the responsibility of the client.
                  </p>
                  <p>
                    <strong className="text-studio-100">Milestone Payment Schedules & Suspension:</strong> For custom engagements, project kick-off requires receipt of an upfront deposit (typically 30% to 50% of the milestone scope). Progress payments become due upon completion of defined sprint milestones, and final assets or live production code are released upon settlement of final invoices. Invoices are payable within seven (7) business days of issuance.
                  </p>
                  <p>
                    <strong className="text-studio-100">Overdue Payments & Remedies:</strong> Where an undisputed invoice remains overdue past ten (10) business days following written reminder notice, Mayaa Solutions reserves the right to suspend scheduled development, withhold production deployment, and postpone milestone delivery until arrears are cleared. Work suspension caused by non-payment proportionately extends the delivery schedule.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 6. Project Scope, Timelines and Client Responsibilities */}
                <section id="section-6" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">06</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Project Scope, Timelines & Client Responsibilities
                    </h2>
                  </div>
                  <p>
                    Successful digital engineering and brand creation require active collaboration. Clients acknowledge and agree to the following obligations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Timely Inputs & Approvals:</strong> The Client must furnish required business briefs, text content, high-resolution brand assets, third-party credentials, and technical feedback within agreed review windows (ordinarily within three to five business days).</li>
                    <li><strong className="text-studio-100">Schedule Dependencies:</strong> Delivery dates provided in proposals or schedules are good-faith estimates dependent upon timely client cooperation. Any material delay in client feedback, milestone approval, or asset delivery automatically extends subsequent project milestones by a period at least equal to the client-side delay.</li>
                    <li><strong className="text-studio-100">Scope Expansion (Change Requests):</strong> Work requested beyond the specifications defined in an accepted Statement of Work constitutes a Scope Change. Additional revisions, features, page templates, integrations, or structural modifications will be estimated separately and require mutual written agreement (via email or change order) before implementation.</li>
                    <li><strong className="text-studio-100">Dedicated Stakeholder:</strong> The Client shall designate a primary point of contact possessing authority to grant milestone sign-offs, evaluate deliverables, and approve change requests.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 7. Revisions, Acceptance and Defects */}
                <section id="section-7" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">07</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Revisions, Acceptance & Material Defects
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Allocated Revisions:</strong> Unless otherwise specified in the applicable Statement of Work, custom design and identity phases include up to two (2) consolidated rounds of feedback and revisions within the agreed scope. Starter service packages purchased online include the revision rounds explicitly described in their catalog specifications.
                  </p>
                  <p>
                    <strong className="text-studio-100">Review & Acceptance Process:</strong> Upon delivery of a milestone deliverable or staging build, the Client shall have a review period of seven (7) business days (or such other duration agreed in the SOW) to inspect the work against agreed specifications.
                  </p>
                  <p>
                    <strong className="text-studio-100">Reporting Material Defects:</strong> If the Client identifies a material non-conformity or defect against the written project specification, the Client must submit a consolidated written notice detailing the specific deviation. Mayaa Solutions will promptly investigate and remedy the documented material non-conformity at no additional charge.
                  </p>
                  <p>
                    <strong className="text-studio-100">Constructive Acceptance:</strong> If the Client neither reports material defects nor requests an extension within the review period, or if the Client uses the deliverable in active commercial production, the deliverable shall be deemed accepted. Nothing in this clause limits non-waivable statutory conformity rights available to Consumers under applicable consumer legislation.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 8. Digital Products and Downloads */}
                <section id="section-8" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">08</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Digital Products & Instant Downloads
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Product Nature & Delivery:</strong> Mayaa Solutions offers downloadable guides, strategic frameworks, PM templates, and operational toolkits in digital formats (such as PDF, Notion frameworks, or Figma kits). Upon successful payment verification, access is provided immediately via direct download link or email delivery.
                  </p>
                  <p>
                    <strong className="text-studio-100">License Grant:</strong> Digital products are licensed, not sold. Mayaa Solutions grants the purchaser a personal, revocable, non-exclusive, non-transferable license to use the materials for their own internal business or personal professional use. You may not resell, sub-license, syndicate, publicly redistribute, or claim copyright over these digital products.
                  </p>
                  <p>
                    <strong className="text-studio-100">Statutory Consumer Rights & Withdrawal Disclosures:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">General Policy:</strong> Because digital downloads provide immediate, irrevocable access to intellectual content, purchases by business entities are final and non-refundable once the file is downloaded or accessed.</li>
                    <li><strong className="text-studio-100">EU/UK Consumer Distance Contracts:</strong> If you are a Consumer residing in the European Union or United Kingdom purchasing digital content not supplied on a tangible medium, statutory rules grant a 14-day right of withdrawal. However, pursuant to Article 16(m) of EU Directive 2011/83/EU and UK Consumer Contracts Regulations, by proceeding to checkout and requesting immediate digital supply prior to the expiry of the 14-day period, you acknowledge and agree that you provide your express consent to commence digital performance and acknowledge that you thereby lose your right of withdrawal once downloading or access begins.</li>
                    <li><strong className="text-studio-100">Defective Digital Content:</strong> If a digital file is corrupt, materially defective, or technically inaccessible, we will provide an uncorrupted replacement or, if unable to do so within three (3) business days, issue a full refund of the amount paid.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 9. Cancellation, Termination and Refunds */}
                <section id="section-9" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">09</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Cancellation, Termination & Refund Framework
                    </h2>
                  </div>
                  <p>
                    We operate a fair, commercially balanced framework addressing project cancellations, scope reductions, and terminations:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Client-Requested Project Cancellation:</strong> If a client elects to terminate a custom engagement for convenience prior to milestone completion, the client must provide written notice. The client remains responsible for payment for all hours worked, milestones completed, and non-recoverable third-party commitments incurred up to the date of notice. Any unallocated balance of advance payments will be refunded within fourteen (14) business days.</li>
                    <li><strong className="text-studio-100">Starter Service Packages:</strong> For fixed starter packages (e.g., logo design, brand naming, website demo), if a client cancels before strategic work commences, a full refund less payment processing gateway costs will be issued. Once discovery work, concepts, or drafts have been delivered, fees represent compensation for professional services rendered and are non-refundable; however, the client remains entitled to credit the full starter amount toward an expanded bespoke project with Mayaa Solutions as advertised.</li>
                    <li><strong className="text-studio-100">Termination for Cause:</strong> Either party may terminate an engagement immediately upon written notice if the other party commits a material breach of the agreement and fails to remedy such breach within fourteen (14) calendar days of receiving written notice specifying the breach.</li>
                    <li><strong className="text-studio-100">Inability to Perform:</strong> If Mayaa Solutions is unable to fulfill a contracted service due to unexpected technical or operational incapacity, we will notify the client promptly and refund any unearned portion of advance fees received for unperformed work.</li>
                    <li><strong className="text-studio-100">Mandatory Statutory Refunds:</strong> Nothing in these Terms excludes, restricts, or modifies any refund right or warranty remedy guaranteed by mandatory statutory consumer law that cannot be lawfully excluded.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 10. Intellectual Property */}
                <section id="section-10" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">10</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Intellectual Property & Deliverable Transfer
                    </h2>
                  </div>
                  <p>
                    Clear intellectual property ownership is fundamental to our engineering and design partnership:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Client Materials:</strong> The Client retains sole and exclusive ownership of all pre-existing trademarks, trade secrets, logos, content, databases, and proprietary data furnished to Mayaa Solutions (<strong className="text-studio-100">"Client Materials"</strong>). You grant Mayaa a limited, non-exclusive license to use Client Materials strictly to deliver the contracted services.</li>
                    <li><strong className="text-studio-100">Custom Deliverables Ownership Transfer:</strong> Subject to receipt of full and final payment of all agreed contract fees, Mayaa Solutions assigns and transfers to the Client all right, title, and interest in and to the custom deliverables specifically created for the Client under the applicable SOW (including finalized bespoke vector logos, custom branding design files, unique frontend codebase, and database schemas).</li>
                    <li><strong className="text-studio-100">Pre-Existing Tools & Frameworks:</strong> Mayaa Solutions retains ownership of its background technology, pre-existing software libraries, architectural frameworks, boilerplate modules, utility routines, and general know-how developed prior to or independently of the engagement (<strong className="text-studio-100">"Background IP"</strong>). To the extent Background IP is embedded in custom deliverables, Mayaa grants the Client a perpetual, worldwide, royalty-free, non-exclusive license to run, modify, and maintain such IP as integrated into the deliverable, without perpetual per-seat software licensing fees.</li>
                    <li><strong className="text-studio-100">Third-Party & Open-Source Assets:</strong> Third-party libraries, open-source code (e.g., React, Tailwind, Vite), stock imagery, and licensed fonts remain subject to their respective open-source or commercial licenses.</li>
                    <li><strong className="text-studio-100">Portfolio & Publicity Rights:</strong> Mayaa Solutions reserves the right to reference the Client's business name, brand identity, and completed work in its professional portfolio, case studies, and marketing materials, unless the Client has requested in writing and executed a specific Non-Disclosure Agreement (NDA) or confidentiality restriction prohibiting such attribution.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 11. Confidentiality and Data Protection */}
                <section id="section-11" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">11</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Confidentiality & Data Protection Governance
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Confidentiality Obligations:</strong> Each party undertakes to maintain the strict confidentiality of all non-public technical, financial, strategic, and commercial information disclosed by the other party (<strong className="text-studio-100">"Confidential Information"</strong>). Neither party shall disclose Confidential Information to third parties without prior written consent, except to employees, professional advisors, and technical contractors bound by equivalent non-disclosure obligations.
                  </p>
                  <p>
                    <strong className="text-studio-100">Confidentiality Exceptions:</strong> Obligations of confidentiality do not apply to information that: (a) is or becomes publicly known through no breach of this agreement; (b) was already known to the receiving party prior to disclosure; (c) is independently developed without reference to the disclosing party's Confidential Information; or (d) is required to be disclosed by competent legal process or governmental order.
                  </p>
                  <p>
                    <strong className="text-studio-100">Personal Data & Privacy Compliance:</strong>
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Website Data Processing:</strong> Personal data collected through website forms, inquiries, and checkout flows is processed in accordance with our data protection practices and applicable privacy standards.</li>
                    <li><strong className="text-studio-100">Indian DPDP Act, 2023:</strong> In handling personal data of Indian residents, Mayaa Solutions adheres to principles of lawfulness, purpose limitation, data minimization, and reasonable security safeguards in accordance with the Digital Personal Data Protection Act, 2023, and applicable implementation rules.</li>
                    <li><strong className="text-studio-100">Client Cloud Infrastructure & Data Sovereignty:</strong> For bespoke business management systems (BMS) and web applications, Mayaa Solutions deploys software directly onto client-owned cloud tenancies (such as client AWS, Azure, Supabase, or Google Cloud accounts). Mayaa does not store, monetize, or harvest client customer data. Where Mayaa acts as a data processor for enterprise client systems, the parties will execute a formal Data Processing Addendum (DPA) incorporating standard contractual clauses where legally required.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 12. Third-Party Services and Dependencies */}
                <section id="section-12" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">12</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Third-Party Services, Cloud Platforms & APIs
                    </h2>
                  </div>
                  <p>
                    Modern web and business systems rely on external services, including domain registrars, cloud infrastructure (AWS, Azure, Supabase, Vercel), payment gateways (Cashfree, Stripe), messaging APIs (Twilio, WhatsApp Business API), and analytics tools.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li><strong className="text-studio-100">Account Ownership & Direct Billing:</strong> Third-party infrastructure, domain registrations, and API access must be opened in the Client's legal name and funded directly by the Client, ensuring complete client autonomy and eliminating vendor lock-in.</li>
                    <li><strong className="text-studio-100">No Responsibility for Third-Party Failures:</strong> Mayaa Solutions is not liable for service interruptions, rate changes, policy modifications, API deprecations, data losses, or outages originating from third-party hosting providers, cloud operators, telecommunications vendors, or external software services.</li>
                    <li><strong className="text-studio-100">License Compliance:</strong> The Client is solely responsible for adhering to the terms of service, acceptable use policies, and license agreements governing third-party products and integrations chosen by the Client.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 13. AI-Assisted Work */}
                <section id="section-13" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">13</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      AI-Assisted Workflow & Intellectual Safeguards
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Modern Engineering Methodologies:</strong> Mayaa Solutions utilizes industry-standard artificial intelligence (AI) and automated tooling to assist our senior architects and designers in research, preliminary code refactoring, data analysis, and conceptual exploration.
                  </p>
                  <p>
                    <strong className="text-studio-100">Mandatory Human Review:</strong> All production deliverables, strategic brand architectures, frontend codebases, and custom business software pass through rigorous human review, architectural verification, and quality engineering by our senior practitioners prior to deployment or handover.
                  </p>
                  <p>
                    <strong className="text-studio-100">Intellectual Property & Uniqueness Disclosures:</strong> While Mayaa exercises professional care to deliver original, high-calibre solutions, Client acknowledges that the legal protectability and copyright eligibility of purely AI-generated outputs varies across jurisdictions. Mayaa Solutions does not guarantee that preliminary AI-generated conceptual explorations are capable of exclusive copyright registration, but warrants that final bespoke deliverables delivered under signed contracts comply with our express non-infringement standards.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 14. Marketing, Growth and Business Outcomes */}
                <section id="section-14" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">14</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Marketing, Growth & Business Outcomes
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Professional Services Standard:</strong> Mayaa Solutions commits to delivering strategic brand assets, search-optimized web platforms, and business systems designed in accordance with rigorous commercial practices and agreed technical specifications.
                  </p>
                  <p>
                    <strong className="text-studio-100">No Guarantees of Commercial Success:</strong> Digital marketing, brand perception, and business growth depend on numerous dynamic market variables beyond our control, including product-market fit, competitor pricing, macroeconomic shifts, advertising budget fluctuations, and client operational responsiveness. Consequently, Mayaa Solutions does not guarantee specific commercial outcomes, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li>Specific revenue, turnover, or profitability increases;</li>
                    <li>Guaranteed search engine ranking positions on Google, Bing, or AI search platforms;</li>
                    <li>Specific cost-per-click, advertising return on ad spend (ROAS), or lead conversion volumes;</li>
                    <li>Securing external investment, venture capital funding, or enterprise contracts.</li>
                  </ul>
                  <p>
                    Case studies, testimonials, and past client metrics presented on our website illustrate authentic historical project outcomes but do not constitute a warranty or guarantee of identical results for future engagements.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 15. Warranties and Service Commitments */}
                <section id="section-15" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">15</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Warranties & Express Service Commitments
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Professional Workmanship Warranty:</strong> Mayaa Solutions warrants that all bespoke services will be performed with professional diligence, skill, and competence consistent with prevailing international digital engineering and design standards.
                  </p>
                  <p>
                    <strong className="text-studio-100">Warranty Support Period:</strong> Custom web platforms and business management software delivered under a signed Statement of Work include a thirty (30) calendar day warranty period commencing from initial production launch or sign-off. During this window, Mayaa Solutions will rectify, at no additional cost, reproducible software bugs or deviations from the agreed written functional specification. The warranty does not cover issues resulting from client modifications, third-party plugin updates, hosting configuration failures, or post-delivery alterations.
                  </p>
                  <p>
                    <strong className="text-studio-100">Disclaimer of Implied Warranties:</strong> Except as expressly provided herein or in an executed Statement of Work, our website, digital products, and services are provided on an <strong className="text-studio-100">"as is"</strong> and <strong className="text-studio-100">"as available"</strong> basis. To the maximum extent permitted by applicable law, Mayaa Solutions disclaims all implied warranties of merchantability, fitness for a particular purpose, non-infringement, and uninterrupted system availability.
                  </p>
                  <p>
                    <strong className="text-studio-100">Preservation of Mandatory Statutory Rights:</strong> Nothing in this section seeks to limit or exclude non-waivable statutory warranties or conditions granted to Consumers under applicable consumer protection legislation.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 16. Limitation of Liability */}
                <section id="section-16" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">16</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Limitation of Liability & Liability Cap
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Exclusion of Consequential and Indirect Damages:</strong> To the maximum extent permitted by applicable law, neither party shall be liable to the other for any indirect, incidental, punitive, special, or consequential damages, nor for loss of business profits, lost revenue, lost goodwill, loss of prospective opportunity, loss of anticipated savings, or business interruption, arising out of or in connection with this agreement, whether based in contract, tort (including negligence), strict liability, or otherwise, even if advised of the possibility of such damages.
                  </p>
                  <p>
                    <strong className="text-studio-100">Aggregate Monetary Liability Cap:</strong> To the maximum extent permitted by applicable law, the total aggregate liability of Mayaa Solutions arising out of or related to any engagement, whether in contract, tort (including negligence), indemnity, or otherwise, shall be strictly capped at and shall not exceed the total fees actually received by Mayaa Solutions from the Client under the specific Statement of Work or catalog transaction that directly caused the claim during the six (6) month period immediately preceding the event giving rise to liability.
                  </p>
                  <p>
                    <strong className="text-studio-100">Non-Excludable Liabilities:</strong> Nothing in these Terms shall limit or exclude either party's liability for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li>Death or personal injury caused by negligence;</li>
                    <li>Fraud or fraudulent misrepresentation;</li>
                    <li>Willful misconduct or intentional breach;</li>
                    <li>Client's obligation to pay accrued, undisputed contract fees;</li>
                    <li>Any other liability that cannot lawfully be limited or excluded under mandatory applicable law.</li>
                  </ul>
                  <div className="p-4 rounded-xl bg-studio-900 border border-studio-850 text-xs text-studio-400">
                    <strong className="text-studio-100 block mb-1">Legal Review Notice:</strong> The limitation of liability clauses set forth herein represent negotiated commercial allocations of risk appropriate for international B2B digital services. Clients retaining Mayaa Solutions under multi-year enterprise agreements may negotiate custom liability terms within a formal Master Services Agreement.
                  </div>
                </section>

                <hr className="border-studio-850" />

                {/* 17. Indemnification */}
                <section id="section-17" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">17</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Indemnification & Third-Party Claims
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Client Indemnity:</strong> The Client agrees to defend, indemnify, and hold harmless Mayaa Solutions, its principals, officers, and technical personnel from and against any third-party claims, liabilities, damages, losses, and reasonable legal expenses arising out of: (a) any allegation that Client Materials (including client-provided text, images, trademarks, or database content) infringe or misappropriate a third party's intellectual property, privacy, or publicity rights; (b) the Client's unlawful operation of its business or commercial products; or (c) the Client's breach of third-party software licenses or cloud service terms.
                  </p>
                  <p>
                    <strong className="text-studio-100">Indemnity Procedures:</strong> In any indemnifiable claim, Mayaa Solutions will: (i) provide prompt written notice of the claim to the Client; (ii) grant the Client reasonable control over the defense and settlement of the claim (provided no settlement admitting liability on Mayaa's part may be agreed without our prior written consent); and (iii) provide reasonable cooperation at the Client's expense.
                  </p>
                  <p>
                    <strong className="text-studio-100">Consumer Transactions:</strong> This indemnity clause does not apply to individual Consumers to the extent that it would impose disproportionate liability contrary to statutory consumer protection regulations.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 18. Suspension and Termination */}
                <section id="section-18" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">18</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Suspension & Termination Mechanics
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Grounds for Suspension:</strong> Mayaa Solutions may temporarily suspend performance of services, staging access, or production release if: (a) undisputed invoices remain unpaid beyond ten (10) business days following written notice; (b) the Client fails to provide critical approvals or inputs for more than thirty (30) consecutive days; or (c) the Client engages in abusive, threatening, or unlawful conduct toward our personnel.
                  </p>
                  <p>
                    <strong className="text-studio-100">Termination for Insolvency:</strong> Either party may terminate an engagement immediately upon written notice if the other party enters into voluntary or involuntary liquidation, becomes insolvent, makes an assignment for the benefit of creditors, or has a receiver appointed over its assets.
                  </p>
                  <p>
                    <strong className="text-studio-100">Consequences of Termination:</strong> Upon termination for any reason:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-studio-300">
                    <li>The Client shall promptly settle all outstanding invoices for work completed and verified up to the termination date;</li>
                    <li>Subject to receipt of full payment for completed work, Mayaa Solutions will deliver all completed deliverables and work-in-progress to the Client;</li>
                    <li>Each party will return or destroy the other party's Confidential Information upon request;</li>
                    <li>Clauses intended by their nature to survive (including Intellectual Property, Confidential Information, Limitation of Liability, Indemnification, and Governing Law) will remain in full force and effect.</li>
                  </ul>
                </section>

                <hr className="border-studio-850" />

                {/* 19. Force Majeure */}
                <section id="section-19" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">19</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Force Majeure
                    </h2>
                  </div>
                  <p>
                    Neither party shall be liable or deemed in breach of its obligations for any delay or failure in performance resulting from events beyond its reasonable control (<strong className="text-studio-100">"Force Majeure Event"</strong>), including acts of God, flood, earthquake, widespread epidemic or pandemic, civil unrest, acts of terrorism, war, strikes or labour disputes, major power grid disruptions, national telecommunications or internet infrastructure failures, or government embargoes.
                  </p>
                  <p>
                    <strong className="text-studio-100">Notice & Mitigation:</strong> The affected party shall promptly notify the other party in writing within five (5) business days and make commercially reasonable efforts to mitigate the delay. If a Force Majeure Event persists continuously for more than sixty (60) calendar days, either party may terminate the affected Statement of Work upon written notice without penalty. Ordinary staffing challenges, commercial setbacks, or client payment obligations do not constitute Force Majeure events.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 20. Electronic Communications and Signatures */}
                <section id="section-20" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">20</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Electronic Communications & Online Assent
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Electronic Assent:</strong> In accordance with the Indian Information Technology Act, 2000, and international electronic transactions frameworks (including the UNCITRAL Model Law on Electronic Commerce, EU eIDAS Regulation, and UAE Electronic Transactions and Trust Services Law), contracts, statements of work, proposals, change orders, and acceptances may be executed by electronic signatures, digital signature services (e.g., DocuSign, Adobe Sign), or confirmed written email approvals exchanged between authorised representatives.
                  </p>
                  <p>
                    <strong className="text-studio-100">Online Checkout Acceptance:</strong> Clicking "Pay Securely", "Complete Order", or checking an assent box during checkout constitutes valid electronic consent and acceptance of these Terms for the transaction. Simply browsing public informative website pages does not impose customized contractual obligations but signifies acceptance of basic website usage terms and intellectual property rights.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 21. Governing Law and Dispute Resolution */}
                <section id="section-21" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">21</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Governing Law & Dispute Resolution
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Governing Law:</strong> These Terms, and any dispute, controversy, or claim arising out of or relating to them, their interpretation, performance, or breach, shall be governed by and construed in accordance with the substantive laws of <strong className="text-studio-100">India</strong>, without regard to conflict of laws principles. The United Nations Convention on Contracts for the International Sale of Goods (CISG) is expressly excluded.
                  </p>
                  <p>
                    <strong className="text-studio-100">Informal Resolution First:</strong> Prior to initiating formal litigation or arbitration, the parties agree to make good-faith efforts to resolve any dispute through informal executive discussions. Either party may submit written notice describing the dispute, and senior leadership of both parties shall meet via video conference within fifteen (15) calendar days to seek an amicable resolution.
                  </p>
                  <p>
                    <strong className="text-studio-100">Jurisdiction for Business Customers:</strong> For business-to-business (B2B) engagements, if informal negotiations do not resolve the dispute within thirty (30) calendar days, the competent courts located in <strong className="text-studio-100">Pune / Bangalore, Karnataka, India</strong> shall have exclusive jurisdiction to adjudicate any claims, disputes, or proceedings arising under or in connection with these Terms or any Statement of Work.
                  </p>
                  <p>
                    <strong className="text-studio-100">Preservation of Mandatory Consumer Jurisdiction:</strong> If you are a Consumer residing outside India (such as in the European Union, United Kingdom, or UAE), this governing law and jurisdiction clause does not deprive you of mandatory consumer protection protections or forum rights guaranteed by the laws of your country of habitual residence.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 22. Changes to the Terms */}
                <section id="section-22" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">22</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Amendments & Modifications
                    </h2>
                  </div>
                  <p>
                    Mayaa Solutions may update or revise these general Terms from time to time to reflect operational, technological, or legal developments. When changes are published, we will update the "Last Updated" date at the top of this page.
                  </p>
                  <p>
                    <strong className="text-studio-100">Protection of Existing Signed Agreements:</strong> Revisions to these website Terms do not retroactively amend or alter the commercial terms, pricing, or specifications of an existing, signed Statement of Work or Master Services Agreement currently in progress. Any modification to a live project agreement requires written mutual consent signed by both parties.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 23. Severability, Waiver and Assignment */}
                <section id="section-23" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">23</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Severability, Entire Agreement & Assignment
                    </h2>
                  </div>
                  <p>
                    <strong className="text-studio-100">Severability:</strong> If any provision of these Terms is held by a court of competent jurisdiction to be invalid, illegal, or unenforceable, that provision shall be enforced to the maximum extent permissible, and the remaining provisions shall continue in full force and effect.
                  </p>
                  <p>
                    <strong className="text-studio-100">No Waiver:</strong> The failure of either party to enforce any right or provision of these Terms shall not constitute a waiver of future enforcement of that right or any other provision.
                  </p>
                  <p>
                    <strong className="text-studio-100">Assignment:</strong> Neither party may assign or transfer its rights or obligations under these Terms without prior written consent from the other party, except that Mayaa Solutions may assign its rights in connection with a corporate reorganization, merger, or sale of substantially all business assets.
                  </p>
                  <p>
                    <strong className="text-studio-100">Entire Agreement:</strong> These Terms, together with any applicable Statement of Work, Proposal, or online checkout order, constitute the entire agreement between the parties regarding the subject matter hereof, superseding all prior oral or written representations, discussions, or understandings.
                  </p>
                </section>

                <hr className="border-studio-850" />

                {/* 24. Contact Information */}
                <section id="section-24" className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-2.5 py-1 rounded-lg bg-studio-900 text-xs font-mono font-bold text-studio-100">24</span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-studio-100 tracking-tight">
                      Official Inquiries & Contact Directory
                    </h2>
                  </div>
                  <p>
                    If you have questions regarding these Terms, seek clarification on custom enterprise contracts, or wish to issue a formal contractual communication, please reach out through our official channels:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-5 rounded-2xl bg-studio-900 border border-studio-850 space-y-2">
                      <div className="flex items-center gap-2 text-studio-100 font-bold text-xs uppercase tracking-wider">
                        <Mail className="w-4 h-4" /> Legal & Contract Inquiries
                      </div>
                      <a 
                        href="mailto:contact@mayaasolutions.in" 
                        className="text-studio-100 hover:text-studio-400 font-bold text-sm block transition-colors"
                      >
                        contact@mayaasolutions.in
                      </a>
                      <span className="text-xs text-studio-400 block">Monitored during business hours (IST / UTC+5:30)</span>
                    </div>

                    <div className="p-5 rounded-2xl bg-studio-900 border border-studio-850 space-y-2">
                      <div className="flex items-center gap-2 text-studio-100 font-bold text-xs uppercase tracking-wider">
                        <Globe2 className="w-4 h-4" /> Operating Studio & Delivery Base
                      </div>
                      <span className="text-studio-100 font-bold text-sm block">
                        Bangalore, Karnataka, India
                      </span>
                      <span className="text-xs text-studio-400 block">Global Engineering & Strategy Delivery Hub</span>
                    </div>
                  </div>
                </section>

              </div>
            </div>

          </div>

        </div>
      </main>
    </>
  );
};
