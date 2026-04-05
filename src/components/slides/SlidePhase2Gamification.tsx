import { Trophy, Star, Award, Users, TrendingUp } from "lucide-react";
import SlideLayout from "./SlideLayout";

export default function SlidePhase2Gamification() {
  return (
    <SlideLayout>
      <div className="space-y-8">
        <div>
          <span className="badge-pill badge-gold mb-4">Phase 2 — Gamification</span>
          <h2 className="slide-title text-3xl md:text-4xl text-foreground mt-4">
            Citizen Engagement System
          </h2>
          <p className="text-muted-foreground mt-2">
            Gamification inside the Citizen App to encourage active participation
          </p>
          <div className="slide-accent-bar w-24 mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Phone mockup with gamification */}
          <div className="flex justify-center">
            <div className="mockup-phone">
              <div className="mockup-phone-screen p-4 flex flex-col">
                <p className="font-bold text-sm text-foreground mb-4">My Profile</p>
                
                <div className="text-center space-y-2 mb-4">
                  <div className="w-14 h-14 rounded-full bg-gold/20 border-2 border-gold flex items-center justify-center mx-auto">
                    <Trophy className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-bold text-sm text-foreground">Punjab Protector</p>
                  <p className="text-[10px] text-muted-foreground">Level 3 • 1,250 Points</p>
                  <div className="w-full h-2 rounded-full bg-secondary">
                    <div className="h-full w-3/4 rounded-full bg-gold" />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[
                    { icon: "🛡️", name: "Protector" },
                    { icon: "👁️", name: "Watch Hero" },
                    { icon: "⭐", name: "First Report" },
                  ].map((b, i) => (
                    <div key={i} className="text-center p-2 rounded-lg bg-secondary">
                      <p className="text-xl">{b.icon}</p>
                      <p className="text-[8px] text-muted-foreground mt-1">{b.name}</p>
                    </div>
                  ))}
                </div>

                <p className="text-[10px] font-semibold text-muted-foreground uppercase mb-2">Leaderboard</p>
                {[
                  { rank: 1, points: "2,100", you: false },
                  { rank: 2, points: "1,850", you: false },
                  { rank: 3, points: "1,250", you: true },
                ].map((l, i) => (
                  <div key={i} className={`flex items-center justify-between p-2 rounded-lg mb-1 text-[10px] ${l.you ? "bg-primary/10 border border-primary/20" : "bg-secondary"}`}>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground">#{l.rank}</span>
                      <span className="text-muted-foreground">Anonymous</span>
                      {l.you && <span className="badge-pill badge-blue text-[8px] py-0">You</span>}
                    </div>
                    <span className="font-bold text-foreground">{l.points} pts</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-gold" />
                <h3 className="font-bold text-foreground">Points System</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Users earn points for each verified report. Points unlock badges and reward eligibility.
              </p>
            </div>

            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-bold text-foreground">Badges</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="badge-pill badge-blue">Punjab Protector</span>
                <span className="badge-pill badge-gold">Community Watch Hero</span>
                <span className="badge-pill badge-success">First Responder</span>
              </div>
            </div>

            <div className="stat-card space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-success" />
                <h3 className="font-bold text-foreground">Purpose</h3>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><TrendingUp className="w-3.5 h-3.5 mt-0.5 text-success shrink-0" /> Increase citizen engagement</li>
                <li className="flex items-start gap-2"><TrendingUp className="w-3.5 h-3.5 mt-0.5 text-success shrink-0" /> Encourage consistent reporting</li>
                <li className="flex items-start gap-2"><TrendingUp className="w-3.5 h-3.5 mt-0.5 text-success shrink-0" /> Build community-driven policing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  );
}
