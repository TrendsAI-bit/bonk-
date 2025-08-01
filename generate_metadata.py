#!/usr/bin/env python3
import json

def generate_metadata():
    items = []
    
    # Generate metadata for all 100 items
    for i in range(1, 101):
        if i == 6:
            # The Bonkperor
            item = {
                "id": i,
                "filename": f"{i}.png",
                "title": "The Bonkperor",
                "chinese_title": "邦克皇帝",
                "rarity": "Mythic",
                "tier": "The Bonkperor",
                "lore": "The supreme ruler of the Bonk Dynasty. Master of all memes and emperor of chaos. The one true Bonkperor."
            }
        elif i == 7:
            # The Shadow Bonkperor
            item = {
                "id": i,
                "filename": f"{i}.png",
                "title": "The Shadow Bonkperor",
                "chinese_title": "影帝",
                "rarity": "Mythic",
                "tier": "The Shadow Emperor",
                "lore": "The hidden hand behind the throne. Whispers say the Shadow Emperor pulls strings even the Bonkperor cannot see."
            }
        elif 8 <= i <= 13:
            # Bonk Frog Warriors
            item = {
                "id": i,
                "filename": f"{i}.png",
                "title": f"Bonk Frog Warrior #{i:03d}",
                "chinese_title": f"蛙武士 #{i:03d}",
                "rarity": "Legendary",
                "tier": "Bonk Frog Warriors",
                "lore": "Royal guardian of the dynasty. Master of ancient martial memes and imperial combat arts."
            }
        elif 81 <= i <= 100:
            # Court Magistrates
            item = {
                "id": i,
                "filename": f"{i}.png",
                "title": f"Court Magistrate #{i:03d}",
                "chinese_title": f"御史官 #{i:03d}",
                "rarity": "Rare",
                "tier": "Court Magistrates",
                "lore": "Scholar, advisor, and bureaucrat upholding law and chaos in the empire. Trusted servant of the Bonk throne."
            }
        else:
            # Dog Royal Peasants (1-5, 14-80)
            item = {
                "id": i,
                "filename": f"{i}.png",
                "title": f"Bonk Peasant #{i:03d}",
                "chinese_title": f"狗百姓 #{i:03d}",
                "rarity": "Common",
                "tier": "Dog Royal Peasants",
                "lore": "Loyal subject of the realm. Bark loud, work hard, meme harder. Makes up the heart and noise of the dynasty."
            }
        
        items.append(item)
    
    # Create the complete metadata structure
    metadata = {
        "collection": "Bonk Dynasty",
        "total_supply": 100,
        "description": "A legendary collection of Bonk Dynasty characters spanning from common peasants to mythical emperors",
        "items": items,
        "summary": {
            "total_supply": 100,
            "tiers": [
                {
                    "name": "The Bonkperor",
                    "ids": [6],
                    "count": 1,
                    "rarity": "Mythic"
                },
                {
                    "name": "The Shadow Emperor",
                    "ids": [7],
                    "count": 1,
                    "rarity": "Mythic"
                },
                {
                    "name": "Bonk Frog Warriors",
                    "ids": [8, 9, 10, 11, 12, 13],
                    "count": 6,
                    "rarity": "Legendary"
                },
                {
                    "name": "Court Magistrates",
                    "ids": list(range(81, 101)),
                    "count": 20,
                    "rarity": "Rare"
                },
                {
                    "name": "Dog Royal Peasants",
                    "ids": list(range(1, 6)) + list(range(14, 81)),
                    "count": 76,
                    "rarity": "Common"
                }
            ]
        }
    }
    
    return metadata

if __name__ == "__main__":
    metadata = generate_metadata()
    
    # Write to metadata.json
    with open("metadata.json", "w", encoding="utf-8") as f:
        json.dump(metadata, f, indent=2, ensure_ascii=False)
    
    # Write items separately to items.json
    with open("items.json", "w", encoding="utf-8") as f:
        json.dump(metadata["items"], f, indent=2, ensure_ascii=False)
    
    print("Metadata generated successfully!")
    print(f"Total items: {len(metadata['items'])}")
    print("Files created: metadata.json, items.json") 