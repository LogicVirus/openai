"use client";
import * as React from "react";
import { useContext } from "react";
import { Switch } from "radix-ui";
import { useAudioClip } from "@/hooks/useAudioClip";
import s from "./Switcher.module.css";
import { ThemeContext } from "./ThemeProvider";

export const ThemeToggle: React.FC = () => {
  const play = useAudioClip("/click.wav");
  const { theme, setTheme } = useContext(ThemeContext);
  const checked = theme === "dark";
  const id = "theme-toggle";

  return (
    <div className="flex items-center cursor-pointer hover:text-current/70 transition-colors">
      <label className="pr-3 leading-none uppercase cursor-pointer" htmlFor={id}>
        Dark
      </label>
      <Switch.Root
        id={id}
        className={s.Track}
        checked={checked}
        onCheckedChange={(nextChecked) => {
          play();
          setTheme(nextChecked ? "dark" : "light");
        }}
      >
        <Switch.Thumb className={s.Thumb} />
      </Switch.Root>
    </div>
  );
};