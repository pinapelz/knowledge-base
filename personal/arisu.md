# [arisu-ffxiv](https://github.com/pinapelz/arisu-ffxiv)
A small cli-tool for checking weather conditions for Bozja and Eureka in FFXIV. Might expand to other things later but its just a small tool for myself.

## Usage
```
arisu-ffxiv [eureka/bozja]
```

## Bozja

 Bozja output shows the weather for BSF and Zadnor. Shows only where the Rank V sprites will be since those are mainly the ones you should be farming

```
-- Bozja Weather for Sprite Reflecting --
 - Dust Storms (ZONE 2) In: 3 hours and 24 minutes (2025-01-18 03:03:43)
 - Wind (ZONE 3) In: 3 hours and 47 minutes (2025-01-18 03:26:43)
 - Thunder (ZONE 1) In: 20 minutes (2025-01-17 23:59:43)

-- Zadnor --
 - Snow (ZONE 3) In: 3 hours and 24 minutes (2025-01-18 03:03:43)
 - Wind (ZONE 1) In: 3 hours and 47 minutes (2025-01-18 03:26:43)
 - Rain (ZONE 2) In: 2 hours and 38 minutes (2025-01-18 02:17:43)
 - Thunder (ZONE 2) In: 20 minutes (2025-01-17 23:59:43)
 ```
 

 ## Eureka

Eureka shows the 3 predictable rare NMs. Similar to Meka bot behavior in ABBA. Currently there is no logic for deciding if an instance may already be dead due to double weather conditions within the cooldown window. It just reports on the next appropriate weather.


 ```
 -- Notable Eureka Weather --
 - Skoll Weather (Blizzards) In: 2 hours and 40 minutes (2025-01-18 02:17:42)
 - Crab Weather (Fog) In: 1 hour and 8 minutes (2025-01-18 00:45:42)
 - Cassie Weather (Blizzards) In: 22 minutes (2025-01-17 23:59:42)
 ```
